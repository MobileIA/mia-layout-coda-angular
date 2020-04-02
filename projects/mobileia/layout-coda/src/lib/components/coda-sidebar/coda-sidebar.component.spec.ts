import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CodaSidebarComponent } from './coda-sidebar.component';

describe('CodaSidebarComponent', () => {
  let component: CodaSidebarComponent;
  let fixture: ComponentFixture<CodaSidebarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CodaSidebarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CodaSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
