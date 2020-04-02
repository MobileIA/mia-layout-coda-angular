import { TestBed } from '@angular/core/testing';

import { CodaTableService } from './coda-table.service';

describe('CodaTableService', () => {
  let service: CodaTableService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodaTableService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
