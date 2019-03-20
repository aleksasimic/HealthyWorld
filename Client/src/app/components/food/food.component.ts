import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { FoodSelected } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.css']
})
export class FoodComponent implements OnInit {

  @Input() 
  public food: Food

  constructor(private store$: Store<State>) { }

  ngOnInit() {
  }
  addFood(food:Food){
    console.log(food);
    this.store$.dispatch(new FoodSelected(food));
  }
}
