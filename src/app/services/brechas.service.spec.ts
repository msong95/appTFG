import { TestBed } from '@angular/core/testing';

import { BrechasService } from './brechas.service';

describe('BrechasService', () => {
  let service: BrechasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BrechasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
