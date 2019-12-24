import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropectComponent } from './propect.component';

describe('PropectComponent', () => {
  let component: PropectComponent;
  let fixture: ComponentFixture<PropectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
