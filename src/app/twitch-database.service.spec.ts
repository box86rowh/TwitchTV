/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { TwitchDatabaseService } from './twitch-database.service';

describe('TwitchDatabaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TwitchDatabaseService]
    });
  });

  it('should ...', inject([TwitchDatabaseService], (service: TwitchDatabaseService) => {
    expect(service).toBeTruthy();
  }));
});
