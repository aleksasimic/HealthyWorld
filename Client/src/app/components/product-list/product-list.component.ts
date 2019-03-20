import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  products$: Observable<Product[]>;

  constructor(
    private store$: Store<State>
  ) {
    this.products$ = this.store$.select(state => state.products);
  }

  ngOnInit() {
  }

}
