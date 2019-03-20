import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductFindComponent } from './product-find.component';

describe('ProductFindComponent', () => {
  let component: ProductFindComponent;
  let fixture: ComponentFixture<ProductFindComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductFindComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
