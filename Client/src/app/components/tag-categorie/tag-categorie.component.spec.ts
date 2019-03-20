import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TagCategorieComponent } from './tag-categorie.component';

describe('TagCategorieComponent', () => {
  let component: TagCategorieComponent;
  let fixture: ComponentFixture<TagCategorieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TagCategorieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TagCategorieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
