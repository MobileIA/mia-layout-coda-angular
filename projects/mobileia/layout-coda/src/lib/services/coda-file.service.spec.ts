import { TestBed } from '@angular/core/testing';

import { CodaFileService } from './coda-file.service';

describe('CodaFileService', () => {
  let service: CodaFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodaFileService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
