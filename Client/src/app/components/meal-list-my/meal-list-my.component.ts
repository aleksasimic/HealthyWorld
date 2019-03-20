import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';

@Component({
  selector: 'app-meal-list-my',
  templateUrl: './meal-list-my.component.html',
  styleUrls: ['./meal-list-my.component.css']
})
export class MealListMyComponent implements OnInit {

  mymeals$:Observable<Meal[]>;
  constructor(private store$:Store<State>) { 
    this.mymeals$=this.store$.select(state=>state.mymeals);
  }

  ngOnInit() {
  }

}
