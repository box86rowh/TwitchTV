import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';

@Injectable()
export class TwitchDatabaseService {

  constructor(private af: AngularFire) { }


  getUsers(): FirebaseListObservable<any[]> {
    return this.af.database.list('/userNames');
  }

}
