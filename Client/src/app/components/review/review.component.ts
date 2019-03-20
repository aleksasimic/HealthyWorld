import { Component, OnInit, Input } from '@angular/core';
import { Review } from 'src/app/models/review';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {

  @Input()
  product: Product;

  @Input()
  review: Review;

  date: Date;
  
  constructor() { }

  ngOnInit() {
    this.date = new Date(this.review.date);
    
  }
}
