import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformalsComponent } from './informals.component';

describe('InformalsComponent', () => {
  let component: InformalsComponent;
  let fixture: ComponentFixture<InformalsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformalsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
