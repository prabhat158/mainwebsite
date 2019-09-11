import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstFaqComponent } from './first-faq.component';

describe('FirstFaqComponent', () => {
  let component: FirstFaqComponent;
  let fixture: ComponentFixture<FirstFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
