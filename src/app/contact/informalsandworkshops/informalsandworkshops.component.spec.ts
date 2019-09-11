import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InformalsandworkshopsComponent } from './informalsandworkshops.component';

describe('InformalsandworkshopsComponent', () => {
  let component: InformalsandworkshopsComponent;
  let fixture: ComponentFixture<InformalsandworkshopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InformalsandworkshopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InformalsandworkshopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
