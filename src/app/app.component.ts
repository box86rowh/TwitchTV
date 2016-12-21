import { Component, OnInit } from '@angular/core';
import { TwitchService } from './twitch.service';
import { TwitchUser } from './twitch-user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: TwitchUser[] = [];
  mode: number = -1;
  filterText:string = '';

  constructor(private service: TwitchService) { }

  changeMode(num:number){
    this.mode = num;
  }

  searchChange(ev){
    this.filterText = ev.value;
  }

  ngOnInit() {
    let userNames: string[] = this.service.getUsernames();
    for (var i = 0; i < userNames.length; i++) {
      this.service.getUser(userNames[i])
        .subscribe(u => {
          this.service.getUserIsOnline(u.name).subscribe(val => {
            u.isOnline = val;
            this.users[this.users.length] = u;
            if(this.users.length == userNames.length){
              this.changeMode(0);
            }

          });

        }
        //method #2 - these blocks appear to only execute once; i is always equal to userNames.length
        //userNames[i] returns undefined
        , (error) => {
          console.log("an error occurred! Username is " + userNames[i])
        }
        , () => {
          //console.log("inside the 'final' block. Username is " + userNames[i])
        }
        );
    }
  }
}
