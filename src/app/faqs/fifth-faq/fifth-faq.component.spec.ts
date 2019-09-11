import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FifthFaqComponent } from './fifth-faq.component';

describe('FifthFaqComponent', () => {
  let component: FifthFaqComponent;
  let fixture: ComponentFixture<FifthFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FifthFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FifthFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
