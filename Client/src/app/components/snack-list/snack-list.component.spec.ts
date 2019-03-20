import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SnackListComponent } from './snack-list.component';

describe('SnackListComponent', () => {
  let component: SnackListComponent;
  let fixture: ComponentFixture<SnackListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SnackListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SnackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
