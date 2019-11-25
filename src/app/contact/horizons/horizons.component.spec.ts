import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HorizonsComponent } from './horizons.component';

describe('HorizonsComponent', () => {
  let component: HorizonsComponent;
  let fixture: ComponentFixture<HorizonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HorizonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HorizonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
