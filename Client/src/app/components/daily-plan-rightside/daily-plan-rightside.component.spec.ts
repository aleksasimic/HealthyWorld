import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyPlanRightsideComponent } from './daily-plan-rightside.component';

describe('DailyPlanRightsideComponent', () => {
  let component: DailyPlanRightsideComponent;
  let fixture: ComponentFixture<DailyPlanRightsideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyPlanRightsideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyPlanRightsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
