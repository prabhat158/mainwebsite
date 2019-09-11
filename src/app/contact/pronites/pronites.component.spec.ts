import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PronitesComponent } from './pronites.component';

describe('PronitesComponent', () => {
  let component: PronitesComponent;
  let fixture: ComponentFixture<PronitesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PronitesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PronitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
