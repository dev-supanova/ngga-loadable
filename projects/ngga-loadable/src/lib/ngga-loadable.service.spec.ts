import { TestBed } from '@angular/core/testing';

import { NggaLoadableService } from './ngga-loadable.service';

describe('NggaLoadableService', () => {
  let service: NggaLoadableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NggaLoadableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
