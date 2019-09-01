import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionHomeComponent } from './competition-home.component';

describe('CompetitionHomeComponent', () => {
  let component: CompetitionHomeComponent;
  let fixture: ComponentFixture<CompetitionHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
