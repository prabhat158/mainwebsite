import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FourthFaqComponent } from './fourth-faq.component';

describe('FourthFaqComponent', () => {
  let component: FourthFaqComponent;
  let fixture: ComponentFixture<FourthFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FourthFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FourthFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
