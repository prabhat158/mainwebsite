import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodandbeveragesComponent } from './foodandbeverages.component';

describe('FoodandbeveragesComponent', () => {
  let component: FoodandbeveragesComponent;
  let fixture: ComponentFixture<FoodandbeveragesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodandbeveragesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodandbeveragesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
