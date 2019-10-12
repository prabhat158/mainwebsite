import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProshowsComponent } from './proshows.component';

describe('ProshowsComponent', () => {
  let component: ProshowsComponent;
  let fixture: ComponentFixture<ProshowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProshowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProshowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
