import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPrevWinnerComponent } from './comp-prev-winner.component';

describe('CompPrevWinnerComponent', () => {
  let component: CompPrevWinnerComponent;
  let fixture: ComponentFixture<CompPrevWinnerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPrevWinnerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPrevWinnerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
