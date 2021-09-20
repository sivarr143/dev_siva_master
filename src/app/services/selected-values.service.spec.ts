import { TestBed } from '@angular/core/testing';

import { SelectedValuesService } from './selected-values.service';

describe('SelectedValuesService', () => {
  let service: SelectedValuesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectedValuesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
