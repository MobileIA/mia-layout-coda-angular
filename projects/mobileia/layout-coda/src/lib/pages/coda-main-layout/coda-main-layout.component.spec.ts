import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodaMainLayoutComponent } from './coda-main-layout.component';

describe('CodaMainLayoutComponent', () => {
  let component: CodaMainLayoutComponent;
  let fixture: ComponentFixture<CodaMainLayoutComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodaMainLayoutComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodaMainLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
