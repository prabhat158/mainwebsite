import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegprofileComponent } from './regprofile.component';

describe('RegprofileComponent', () => {
  let component: RegprofileComponent;
  let fixture: ComponentFixture<RegprofileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegprofileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegprofileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
