import { TestBed } from '@angular/core/testing';

import { NearbesearchService } from './nearbesearch.service';

describe('NearbesearchService', () => {
  let service: NearbesearchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NearbesearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
