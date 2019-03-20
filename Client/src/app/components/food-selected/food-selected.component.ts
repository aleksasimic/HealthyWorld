import { Component, OnInit, Input } from '@angular/core';
import { Food } from 'src/app/models/food';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { FoodUnselected } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-food-selected',
  templateUrl: './food-selected.component.html',
  styleUrls: ['./food-selected.component.css']
})
export class FoodSelectedComponent implements OnInit {

  @Input() 
  public food: Food

  constructor(private store$: Store<State>) { }

  ngOnInit() {
  }
  unselectFood(food:Food){
    console.log(food);
    this.store$.dispatch(new FoodUnselected(food));
  }

}
