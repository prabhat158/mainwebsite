import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SixthfaqComponent } from './sixthfaq.component';

describe('SixthfaqComponent', () => {
  let component: SixthfaqComponent;
  let fixture: ComponentFixture<SixthfaqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SixthfaqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SixthfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
