import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetitionsandlypComponent } from './competitionsandlyp.component';

describe('CompetitionsandlypComponent', () => {
  let component: CompetitionsandlypComponent;
  let fixture: ComponentFixture<CompetitionsandlypComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompetitionsandlypComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetitionsandlypComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
