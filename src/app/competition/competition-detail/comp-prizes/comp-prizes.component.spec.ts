import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompPrizesComponent } from './comp-prizes.component';

describe('CompPrizesComponent', () => {
  let component: CompPrizesComponent;
  let fixture: ComponentFixture<CompPrizesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompPrizesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompPrizesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
