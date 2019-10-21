import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PremilineupComponent } from './premilineup.component';

describe('PremilineupComponent', () => {
  let component: PremilineupComponent;
  let fixture: ComponentFixture<PremilineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PremilineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PremilineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
