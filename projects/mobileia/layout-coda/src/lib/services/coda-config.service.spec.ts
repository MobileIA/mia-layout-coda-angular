import { TestBed } from '@angular/core/testing';

import { CodaConfigService } from './coda-config.service';

describe('CodaConfigService', () => {
  let service: CodaConfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CodaConfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
