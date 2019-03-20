import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodListSelectedComponent } from './food-list-selected.component';

describe('FoodListSelectedComponent', () => {
  let component: FoodListSelectedComponent;
  let fixture: ComponentFixture<FoodListSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodListSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodListSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
