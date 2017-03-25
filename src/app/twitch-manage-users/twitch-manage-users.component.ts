import { Component, OnInit } from '@angular/core';
import { TwitchDatabaseService } from './../twitch-database.service';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Component({
  selector: 'app-twitch-manage-users',
  templateUrl: './twitch-manage-users.component.html',
  styleUrls: ['./twitch-manage-users.component.css'],
  
})
export class TwitchManageUsersComponent implements OnInit {

  constructor(private service: TwitchDatabaseService) { }

    userNames: FirebaseListObservable<any> = this.service.getUsers();
    newUser: string;
  ngOnInit() {
    console.log(this.userNames);
  }

  addNewUser(){
    console.log('userName = ' + this.newUser);
    var str = '{"userName":"' + this.newUser + '"}';
    console.log(str);
    var u = JSON.parse(str);
    this.service.addUser(u);
  }

}
