import { TestBed } from '@angular/core/testing';

import { EpinService } from './epin.service';

describe('EpinService', () => {
  let service: EpinService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EpinService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
