import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { CATEGORIES_LIST } from 'src/app/const-lists/categories';

@Component({
  selector: 'app-tag-categorie',
  templateUrl: './tag-categorie.component.html',
  styleUrls: ['./tag-categorie.component.css']
})
export class TagCategorieComponent implements OnInit {

  @Input()
  product: Product;

  tags: string[];
  tag: string;
  
  categories: string[];

  constructor() {
    this.categories = CATEGORIES_LIST.filter((x,i) => i !== 0);
  }

  ngOnInit() {
  }
  addTag() {
    if(this.tag !== '') {
      this.product.tags.push(this.tag.toUpperCase());
    }
    this.tag = '';
  }
  addCat(cat: string) {
    this.product.categorie = cat;
    console.log(this.product.categorie);
  }

}
