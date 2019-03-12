import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HttpmethodsComponent } from './httpmethods.component';

describe('HttpmethodsComponent', () => {
  let component: HttpmethodsComponent;
  let fixture: ComponentFixture<HttpmethodsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HttpmethodsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HttpmethodsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
