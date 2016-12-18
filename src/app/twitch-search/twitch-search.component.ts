import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-twitch-search',
  templateUrl: './twitch-search.component.html',
  styleUrls: ['./twitch-search.component.css']
})
export class TwitchSearchComponent {
  searchText: string = '';
  @Output() searchChange = new EventEmitter();

  changeText() {
    this.searchChange.emit({
      value: this.searchText
    })
  }

}
