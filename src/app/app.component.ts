import { Component, OnInit } from '@angular/core';
import { TwitchService } from './twitch.service';
import { TwitchUser } from './twitch-user';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import { TwitchDatabaseService } from './twitch-database.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users: TwitchUser[] = [];
  mode: number = -1;
  filterText: string = '';
  userNames: string[] = [];

  constructor(private service: TwitchService, private dbService: TwitchDatabaseService) { }

  changeMode(num: number) {
    this.mode = num;
  }

  searchChange(ev) {
    this.filterText = ev.value;
  }

  getUserNames(): void {
    this.dbService.getUsers().then(userNames => this.userNames = userNames);
  }

  ngOnInit() {
    this.getUserNames();
    //let userNames: string[] = this.service.userNamesArray;
    //this returns undefined, so nothing in the array
    console.log(this.userNames[0]);
    for (var i = 0; i < this.userNames.length; i++) {
      this.service.getUser(this.userNames[i])
        .subscribe(u => {
          this.service.getUserIsOnline(u.name).subscribe(val => {
            u.isOnline = val;
            this.addUser(u, this.userNames.length);
          });

        }
        , (error) => {
          let u = this.buildUserShell(error.userName, error.errMsg);
          this.addUser(u, this.userNames.length);
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
