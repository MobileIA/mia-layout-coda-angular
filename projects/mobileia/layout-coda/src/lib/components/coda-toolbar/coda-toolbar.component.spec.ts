import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodaToolbarComponent } from './coda-toolbar.component';

describe('CodaToolbarComponent', () => {
  let component: CodaToolbarComponent;
  let fixture: ComponentFixture<CodaToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodaToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodaToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
