import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditSnackComponent } from './edit-snack.component';

describe('EditSnackComponent', () => {
  let component: EditSnackComponent;
  let fixture: ComponentFixture<EditSnackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditSnackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditSnackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
