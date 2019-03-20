import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MealListMyComponent } from './meal-list-my.component';

describe('MealListMyComponent', () => {
  let component: MealListMyComponent;
  let fixture: ComponentFixture<MealListMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MealListMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MealListMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
