import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecondFaqComponent } from './second-faq.component';

describe('SecondFaqComponent', () => {
  let component: SecondFaqComponent;
  let fixture: ComponentFixture<SecondFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecondFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecondFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
