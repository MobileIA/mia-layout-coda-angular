import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnFieldComponent } from './column-field.component';

describe('ColumnFieldComponent', () => {
  let component: ColumnFieldComponent;
  let fixture: ComponentFixture<ColumnFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
