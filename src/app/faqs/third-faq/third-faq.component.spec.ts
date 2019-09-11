import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThirdFaqComponent } from './third-faq.component';

describe('ThirdFaqComponent', () => {
  let component: ThirdFaqComponent;
  let fixture: ComponentFixture<ThirdFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThirdFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThirdFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
