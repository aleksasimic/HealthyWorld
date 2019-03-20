import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPlanCenterComponent } from './daily-plan-center.component';

describe('DailyPlanCenterComponent', () => {
  let component: DailyPlanCenterComponent;
  let fixture: ComponentFixture<DailyPlanCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPlanCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPlanCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
