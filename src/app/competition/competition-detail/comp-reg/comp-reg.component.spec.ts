import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompRegComponent } from './comp-reg.component';

describe('CompRegComponent', () => {
  let component: CompRegComponent;
  let fixture: ComponentFixture<CompRegComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompRegComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompRegComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
