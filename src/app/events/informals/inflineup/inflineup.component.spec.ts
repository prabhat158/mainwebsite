import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InflineupComponent } from './inflineup.component';

describe('InflineupComponent', () => {
  let component: InflineupComponent;
  let fixture: ComponentFixture<InflineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InflineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InflineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
