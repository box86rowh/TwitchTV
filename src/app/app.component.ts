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
  filterText: string = '';

  constructor(private service: TwitchService) { }

  changeMode(num: number) {
    this.mode = num;
  }

  searchChange(ev) {
    this.filterText = ev.value;
  }

  ngOnInit() {
    let userNames: string[] = this.service.getUsernames();
    for (var i = 0; i < userNames.length; i++) {
      this.service.getUser(userNames[i])
        .subscribe(u => {
          this.service.getUserIsOnline(u.name).subscribe(val => {
            u.isOnline = val;
            this.addUser(u, userNames.length);
          });

        }
        , (error) => {
          let u = this.buildUserShell(error.userName, error.errMsg);
          this.addUser(u, userNames.length);
        }
        , () => {
          //console.log("inside the 'final' block. Username is " + userNames[i])
        }
        );
    }
  }
  buildUserShell(un: string, st: string) {
    var user: TwitchUser = {
      name: un,
      displayName: un,
      status: st,
      logo: 'http://hotchillitri.co.uk/wp-content/uploads/2016/10/empty-avatar.jpg',
      isOnline: false,
      url: ''
    };
    return user;
  }
  addUser(u: TwitchUser, size: number) {
    this.users[this.users.length] = u;
    if (this.users.length == size) {
      this.changeMode(0);
    }
  }
}
