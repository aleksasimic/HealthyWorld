import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';

import * as currenciesLists from "./../../const-lists/currencies";
import { MyCurrency } from 'src/app/models/myCurrency';


@Component({
  selector: 'app-price',
  templateUrl: './price.component.html',
  styleUrls: ['./price.component.css']
})
export class PriceComponent implements OnInit {

  @Input()
  product: Product;
  currencies: MyCurrency[];

  constructor() {
    this.currencies = currenciesLists.myCurrencies.filter((x,i) => i !== 0);
  }

  ngOnInit() {
  }
  selectCurrency(currency: MyCurrency) {
    this.product.currency = currency;
  }

}
