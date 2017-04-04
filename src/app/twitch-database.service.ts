import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TwitchDatabaseService {
  userNames: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) { 
    this.userNames = af.database.list('/userNames');
  }


  // getUsers(): FirebaseListObservable<any[]> {
  //   console.log(this.userNames);
  //   return this.userNames;
  // }

  getUsers(): Promise<string[]>{
    var userNameArray: string[] = [];
    this.userNames.subscribe(users => {
      users.forEach(user => {
        userNameArray.push(user.userName)
      });
    })
    return Promise.resolve(userNameArray)
  }

  addUser(userName: any){
    this.userNames.push(userName);
  }

  getUser(userName: string){
    //more to come
  }

}
