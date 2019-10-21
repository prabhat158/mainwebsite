import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WnelineupComponent } from './wnelineup.component';

describe('WnelineupComponent', () => {
  let component: WnelineupComponent;
  let fixture: ComponentFixture<WnelineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WnelineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WnelineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
