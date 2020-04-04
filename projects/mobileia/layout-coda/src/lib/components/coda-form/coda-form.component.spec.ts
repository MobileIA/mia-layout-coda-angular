import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodaFormComponent } from './coda-form.component';

describe('CodaFormComponent', () => {
  let component: CodaFormComponent;
  let fixture: ComponentFixture<CodaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
