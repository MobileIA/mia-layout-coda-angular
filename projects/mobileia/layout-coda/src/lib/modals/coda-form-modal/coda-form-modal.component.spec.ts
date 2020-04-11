import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodaFormModalComponent } from './coda-form-modal.component';

describe('CodaFormModalComponent', () => {
  let component: CodaFormModalComponent;
  let fixture: ComponentFixture<CodaFormModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodaFormModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodaFormModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
