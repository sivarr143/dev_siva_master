import { TestBed } from '@angular/core/testing';

import { TesthelloworldServiceService } from './testhelloworld-service.service';

describe('TesthelloworldServiceService', () => {
  let service: TesthelloworldServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TesthelloworldServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
