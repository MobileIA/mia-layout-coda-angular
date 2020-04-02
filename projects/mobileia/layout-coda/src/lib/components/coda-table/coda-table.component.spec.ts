import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodaTableComponent } from './coda-table.component';

describe('CodaTableComponent', () => {
  let component: CodaTableComponent;
  let fixture: ComponentFixture<CodaTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodaTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodaTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
