import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiCheckboxFieldComponent } from './multi-checkbox-field.component';

describe('MultiCheckboxFieldComponent', () => {
  let component: MultiCheckboxFieldComponent;
  let fixture: ComponentFixture<MultiCheckboxFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiCheckboxFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiCheckboxFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
