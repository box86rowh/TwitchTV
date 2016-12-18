import { Component, OnInit, Input } from '@angular/core';
import { TwitchUser } from '../twitch-user';

@Component({
  selector: 'app-twitch-user-view',
  templateUrl: './twitch-user-view.component.html',
  styleUrls: ['./twitch-user-view.component.css']
})
export class TwitchUserViewComponent implements OnInit {
  @Input() user:TwitchUser;
  constructor() { }

  ngOnInit() {
  }

}
