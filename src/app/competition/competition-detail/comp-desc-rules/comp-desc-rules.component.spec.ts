import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDescRulesComponent } from './comp-desc-rules.component';

describe('CompDescRulesComponent', () => {
  let component: CompDescRulesComponent;
  let fixture: ComponentFixture<CompDescRulesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompDescRulesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDescRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
