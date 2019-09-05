import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompFaqComponent } from './comp-faq.component';

describe('CompFaqComponent', () => {
  let component: CompFaqComponent;
  let fixture: ComponentFixture<CompFaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompFaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompFaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
