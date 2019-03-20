import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackListMyComponent } from './snack-list-my.component';

describe('SnackListMyComponent', () => {
  let component: SnackListMyComponent;
  let fixture: ComponentFixture<SnackListMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackListMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackListMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
