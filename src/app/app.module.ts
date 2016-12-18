import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TwitchService } from './twitch.service';
import { AppComponent } from './app.component';
import { TwitchUserViewComponent } from './twitch-user-view/twitch-user-view.component';
import { TwitchFilterPipe } from './twitch-filter.pipe';
import { TwitchSearchComponent } from './twitch-search/twitch-search.component';

@NgModule({
  declarations: [
    AppComponent,
    TwitchUserViewComponent,
    TwitchFilterPipe,
    TwitchSearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TwitchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
