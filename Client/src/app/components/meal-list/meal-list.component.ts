import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
@Component({
  selector: 'app-meal-list',
  templateUrl: './meal-list.component.html',
  styleUrls: ['./meal-list.component.css']
})
export class MealListComponent implements OnInit {

  recomendedmeals$:Observable<Meal[]>;
  constructor(private store$:Store<State>) { 
    this.recomendedmeals$=this.store$.select(state=>state.recomendedmeals);
  }

  ngOnInit() {
  }

  
}
