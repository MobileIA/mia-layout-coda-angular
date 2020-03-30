import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutCodaComponent } from './layout-coda.component';

describe('LayoutCodaComponent', () => {
  let component: LayoutCodaComponent;
  let fixture: ComponentFixture<LayoutCodaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutCodaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutCodaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
