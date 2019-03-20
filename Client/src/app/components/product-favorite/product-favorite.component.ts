import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { UpdateProduct, ViewProduct, UpdateUser } from 'src/app/store/actions/actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-product-favorite',
  templateUrl: './product-favorite.component.html',
  styleUrls: ['./product-favorite.component.css']
})
export class ProductFavoriteComponent implements OnInit {

  @Input()
  product: Product;
  @Input()
  user: User;

  constructor(
    private store$: Store<State>
  ) { }

  ngOnInit() {
  }
  viewProduct() {
    // console.log('viewProduct()');
    this.product.views++;
    this.store$.dispatch(new UpdateProduct(this.product));
    this.store$.dispatch(new ViewProduct(this.product));
  }
  deleteFavorite() {
    this.user.favoriteProducts = this.user.favoriteProducts.filter( p => p.pid !== this.product.pid);
    this.store$.dispatch(new UpdateUser(this.user));
  }

}
