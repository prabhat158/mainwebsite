import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticsandoperationsComponent } from './logisticsandoperations.component';

describe('LogisticsandoperationsComponent', () => {
  let component: LogisticsandoperationsComponent;
  let fixture: ComponentFixture<LogisticsandoperationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LogisticsandoperationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticsandoperationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
