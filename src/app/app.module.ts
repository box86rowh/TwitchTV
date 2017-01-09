import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TwitchService } from './twitch.service';
import { AppComponent } from './app.component';
import { TwitchUserViewComponent } from './twitch-user-view/twitch-user-view.component';
import { TwitchFilterPipe } from './twitch-filter.pipe';
import { TwitchSearchComponent } from './twitch-search/twitch-search.component';
import { TwitchDatabaseService } from './twitch-database.service';
import { TwitchManageUsersComponent } from './twitch-manage-users/twitch-manage-users.component';

import { AngularFireModule } from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';

@NgModule({
  declarations: [
    AppComponent,
    TwitchUserViewComponent,
    TwitchFilterPipe,
    TwitchSearchComponent,
    TwitchManageUsersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [TwitchService, TwitchDatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
