/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TwitchUserViewComponent } from './twitch-user-view.component';

describe('TwitchUserViewComponent', () => {
  let component: TwitchUserViewComponent;
  let fixture: ComponentFixture<TwitchUserViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TwitchUserViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TwitchUserViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
