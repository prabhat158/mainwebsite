import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WneComponent } from './wne.component';

describe('WneComponent', () => {
  let component: WneComponent;
  let fixture: ComponentFixture<WneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
