import { TestBed } from '@angular/core/testing';

import { CodaModalService } from './coda-modal.service';

describe('CodaModalService', () => {
  let service: CodaModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodaModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
