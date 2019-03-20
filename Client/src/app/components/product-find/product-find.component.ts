import { Component, OnInit } from '@angular/core';
import { categories_list } from 'src/app/const-lists/categories';
import { MyCurrency } from 'src/app/models/myCurrency';

import * as currenciesLists from "./../../const-lists/currencies";
import { CATEGORIES_LIST } from "../../const-lists/categories";
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { FindProduct } from 'src/app/store/actions/actions';
import { ProductFind } from 'src/app/models/productFind';

@Component({
  selector: 'app-product-find',
  templateUrl: './product-find.component.html',
  styleUrls: ['./product-find.component.css']
})
export class ProductFindComponent implements OnInit {

  currencies: MyCurrency[];
  categories: string[];

  name: string = null;

  tags: string[];
  tag: string;

  selectedCat: string;
  selectedCurrency: MyCurrency;

  minPrice: number = null;
  maxPrice: number = null;
  minProteins: number = null;
  maxProteins: number = null;
  minCarb: number = null;
  maxCarb: number = null;
  minKCals: number = null;
  maxKCals: number = null;
  minFat: number = null;
  maxFat: number = null;



  constructor(
    private store$: Store<State>
  ) {
    this.currencies = currenciesLists.myCurrencies;
    this.categories = CATEGORIES_LIST;
    this.selectedCurrency = this.currencies[0];
    this.selectedCat = this.categories[0];
    this.tags = [];
  }

  ngOnInit() {
  }
  find() {
    console.log('find()');
    if(this.name !== null) {
      this.name = this.name.toUpperCase();
    }
    this.store$.dispatch(new FindProduct(
      new ProductFind(
        this.name,
        this.tags,
        this.selectedCat,
        this.selectedCurrency,
        this.minPrice,
        this.maxPrice,
        this.minProteins,
        this.maxProteins,
        this.minCarb,
        this.maxCarb,
        this.minKCals,
        this.maxKCals,
        this.minFat,
        this.maxFat
        )
      )
    );
    
  }
  selectCategorie(c: string) {
    // console.log('selectCategorie()');
    this.selectedCat = c;
  }
  selectCyrrency(c: MyCurrency) {
    // console.log('selectCyrrency()');
    this.selectedCurrency = c;
  }

  addTag() {
    // console.log('addTag()');
    this.tags.push(this.tag.toUpperCase());
    this.tag = '';
  }

  clearTags() {
    this.tags = [];
    this.tag = '';
  }

}
