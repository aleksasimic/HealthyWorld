import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { AddReviewProduct, UpdateProduct, UpdateUser } from 'src/app/store/actions/actions';
import { User } from 'src/app/models/user';
import { Review } from 'src/app/models/review';
import { Location } from '@angular/common';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  currentRate: number;
  currentRateUser: number;

  products$: Observable<Product[]>;
  product: Product;

  user$: Observable<User[]>;
  user: User;

  error: string;

  @Input()
  txtReview: string;
  
  constructor(
    private store$: Store<State>,
    private location: Location
  ) {
    this.products$ = this.store$.select(state => state.productView);
    this.user$ = this.store$.select(state => state.user);
    this.currentRate = 0;
  }

  ngOnInit() {
    this.txtReview = '';
    this.products$.subscribe(products => {
      products.forEach( product => {
        if(product !== null && product !== undefined) {
          this.product = product;
          this.currentRate = this.product.likes;
          this.currentRateUser = this.product.ownerObj.likes;
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

  like() {
    // console.log('like()');
    this.product.nLikes++;
    this.product.sumLikes += this.currentRate;
    this.product.likes = this.product.sumLikes / this.product.nLikes;
    this.currentRate = this.product.likes;

    this.store$.dispatch(new UpdateProduct(this.product));
  }
  goBack(): void {
    this.location.back();
  }
  addReview() {
    console.log('addReview()', this.txtReview);
    if(this.user === undefined || this.user === null || this.user.username === '') {
      console.log('YOU MUST BE LOGED IN!');
      this.error = 'YOU MUST BE LOGED IN!';
      return;
    }
    const newReview = new Review(
      this.product.pid,
      this.product.pid + this.product.reviews.length,
      this.user.username,
      this.txtReview, 
      new Date()
      );

    this.product.reviews = [newReview, ...this.product.reviews];
    this.txtReview = '';
    this.store$.dispatch(new AddReviewProduct(this.product));
    this.store$.dispatch(new UpdateProduct(this.product));
  }

}
