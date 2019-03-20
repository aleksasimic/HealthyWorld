import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css']
})
export class ProductViewComponent implements OnInit {

  user$: Observable<User[]>;
  user: User;
  
  products$: Observable<Product[]>;
  product: Product;

  owner: boolean;

  constructor(
    private store$: Store<State>
  ) {
    this.user$ = this.store$.select(state => state.user);
    this.products$ = this.store$.select(state => state.productView);
  }

  ngOnInit() {
    this.products$.subscribe(products => {
      products.forEach( product => {
        if(product !== null && product !== undefined) {
          this.product = product;
        }
      });
    });
    this.user$.subscribe(users => {
      users.forEach( user => {
        if(user !== undefined && user !== null) {
          this.user = user;
        }
      });
    });
  }

}
