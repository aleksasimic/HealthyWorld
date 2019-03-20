import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from 'src/app/models/food';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';

@Component({
  selector: 'app-food-list-selected',
  templateUrl: './food-list-selected.component.html',
  styleUrls: ['./food-list-selected.component.css']
})
export class FoodListSelectedComponent implements OnInit {

  selectedfood$:Observable<Food[]>;
  constructor(private store$:Store<State>) { 
    this.selectedfood$=this.store$.select(state=>state.foodchosen);
  }
  

  ngOnInit() {
  }

}
