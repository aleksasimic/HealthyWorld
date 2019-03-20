import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealMyComponent } from './meal-my.component';

describe('MealMyComponent', () => {
  let component: MealMyComponent;
  let fixture: ComponentFixture<MealMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
