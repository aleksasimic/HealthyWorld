import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/review';
import { AddReviewProduct, UpdateProduct, DeleteProduct } from 'src/app/store/actions/actions';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { Product } from 'src/app/models/product';

import { Location } from '@angular/common';

@Component({
  selector: 'app-product-change',
  templateUrl: './product-change.component.html',
  styleUrls: ['./product-change.component.css']
})
export class ProductChangeComponent implements OnInit {

  products$: Observable<Product[]>;
  product: Product;

  user$: Observable<User[]>;
  user: User;

  error: string;
  success: string;

  currentRate: number;
  readonly: boolean;

  @Input()
  txtReview: string;
  
  constructor(
    private store$: Store<State>,
    private location: Location
  ) {
    this.products$ = this.store$.select(state => state.productView);
    this.user$ = this.store$.select(state => state.user);
    this.success = null;
    this.currentRate =0;
    this.readonly = true;
  }

  ngOnInit() {
    this.txtReview = '';
    this.products$.subscribe(products => {
      products.forEach( product => {
        if(product !== null && product !== undefined) {
          this.product = product;
          this.currentRate = this.product.likes;
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
  goBack(): void {
    this.location.back();
  }
  change() {
    // console.log('change()',this.product);
    this.product.name =this.product.name.toUpperCase();
    this.product.latinName = this.product.latinName.toUpperCase();
    this.product.place = this.product.place.toUpperCase();

    this.store$.dispatch(new UpdateProduct(this.product));
    this.success = 'CHANGE IS SUCCESSFUL';
  }
  delete() {
    console.log('delete()');
    this.store$.dispatch(new DeleteProduct(this.product));
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
