import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProshowlineupComponent } from './proshowlineup.component';

describe('ProshowlineupComponent', () => {
  let component: ProshowlineupComponent;
  let fixture: ComponentFixture<ProshowlineupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProshowlineupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProshowlineupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
