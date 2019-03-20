import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductChangeComponent } from './product-change.component';

describe('ProductChangeComponent', () => {
  let component: ProductChangeComponent;
  let fixture: ComponentFixture<ProductChangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductChangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductChangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
