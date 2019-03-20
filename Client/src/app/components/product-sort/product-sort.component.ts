import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { SortProducts } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-product-sort',
  templateUrl: './product-sort.component.html',
  styleUrls: ['./product-sort.component.css']
})
export class ProductSortComponent implements OnInit {

  constructor(
    private store$: Store<State>
  ) { }

  ngOnInit() {
  }
  sort(property: string,ascendingBool: boolean) {
    // console.log('sort()');
    this.store$.dispatch(new SortProducts(property,ascendingBool));
  }

}
