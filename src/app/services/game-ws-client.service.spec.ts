import { TestBed } from '@angular/core/testing';

import { GameWsClient } from './game-ws-client.service';

describe('GameWsClientService', () => {
  let service: GameWsClient;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameWsClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
