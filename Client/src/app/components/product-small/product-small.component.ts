import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { ViewProduct, UpdateProduct, UpdateUser } from 'src/app/store/actions/actions';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-product-small',
  templateUrl: './product-small.component.html',
  styleUrls: ['./product-small.component.css']
})
export class ProductSmallComponent implements OnInit {

  @Input()
  product: Product;
  
  user$: Observable<User[]>;
  user: User;
  
  constructor(
    private store$: Store<State>
  ) {
    this.user$ = this.store$.select(state => state.user);
    this.user = null;
  }

  ngOnInit() {
    console.log(this.product.img);
    this.user$.subscribe(users => {
      users.forEach(user => {
        this.user = user;
      });
    });
  }

  viewProduct() {
    // console.log('viewProduct()');
    this.product.views++;
    this.store$.dispatch(new UpdateProduct(this.product));
    this.store$.dispatch(new ViewProduct(this.product));
  }
  addToFavorites() {
    if(this.user !== null){
        // ce da izbaci proizvod iz liste ako vec postoji
        this.user.favoriteProducts = this.user.favoriteProducts.filter(p => p.pid !== this.product.pid);
        // i ce da ga stavi na pocetak, sto znaci, samo ga prebacuje na pocetak liste ako on vec postoji :D
        this.user.favoriteProducts = [this.product, ...this.user.favoriteProducts];
        this.store$.dispatch(new UpdateUser(this.user));
    }
  }

}
