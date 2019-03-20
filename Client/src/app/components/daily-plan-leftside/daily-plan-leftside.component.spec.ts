import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPlanLeftsideComponent } from './daily-plan-leftside.component';

describe('DailyPlanLeftsideComponent', () => {
  let component: DailyPlanLeftsideComponent;
  let fixture: ComponentFixture<DailyPlanLeftsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPlanLeftsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPlanLeftsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
