import { TestBed } from '@angular/core/testing';

import { LayoutCodaService } from './layout-coda.service';

describe('LayoutCodaService', () => {
  let service: LayoutCodaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LayoutCodaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
