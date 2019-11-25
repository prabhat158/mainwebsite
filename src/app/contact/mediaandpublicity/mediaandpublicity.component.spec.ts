import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MediaandpublicityComponent } from './mediaandpublicity.component';

describe('MediaandpublicityComponent', () => {
  let component: MediaandpublicityComponent;
  let fixture: ComponentFixture<MediaandpublicityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MediaandpublicityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MediaandpublicityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
