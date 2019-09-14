import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EventtabComponent } from './eventtab.component';

describe('EventtabComponent', () => {
  let component: EventtabComponent;
  let fixture: ComponentFixture<EventtabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EventtabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EventtabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
