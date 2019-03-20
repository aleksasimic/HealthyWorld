import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddSnackComponent } from './add-snack.component';

describe('AddSnackComponent', () => {
  let component: AddSnackComponent;
  let fixture: ComponentFixture<AddSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
