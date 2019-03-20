import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { Observable } from 'rxjs';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.css']
})
export class FoodListComponent implements OnInit {

  allfood$:Observable<Food[]>;
  constructor(private store$:Store<State>) { 
    this.allfood$=this.store$.select(state=>state.allfood);
  }
  ngOnInit() {
  }

}
