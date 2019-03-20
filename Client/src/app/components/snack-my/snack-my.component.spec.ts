import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackMyComponent } from './snack-my.component';

describe('SnackMyComponent', () => {
  let component: SnackMyComponent;
  let fixture: ComponentFixture<SnackMyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackMyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackMyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
