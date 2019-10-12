import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProniteComponent } from './pronite.component';

describe('ProniteComponent', () => {
  let component: ProniteComponent;
  let fixture: ComponentFixture<ProniteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProniteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProniteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
