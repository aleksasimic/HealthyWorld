import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodSelectedComponent } from './food-selected.component';

describe('FoodSelectedComponent', () => {
  let component: FoodSelectedComponent;
  let fixture: ComponentFixture<FoodSelectedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodSelectedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
