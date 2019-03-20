import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { State } from 'src/app/store/store';
import { Store } from '@ngrx/store';
import { DeleteMyMeal, EditMealSelected } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-meal-my',
  templateUrl: './meal-my.component.html',
  styleUrls: ['./meal-my.component.css']
})
export class MealMyComponent implements OnInit {

  @Input() 
  public meal: Meal;

  user: User;
  user$: Observable<User[]>;
  date:Number[];
  date$:Observable<Number[]>;
  constructor(private store$: Store<State>) { 
    this.user$ = this.store$.select(state => state.user);
    this.date$=this.store$.select(state=>state.selecteddate);
  }

  ngOnInit() {
    this.user$.subscribe(users => {
      users.forEach( user => {
        if(user !== undefined && user !== null) {
          this.user = user;
        }
      });
    });
    this.date$.subscribe(date => {
      this.date=date;
    });
  }
  editMeal(meal:Meal){
   this.store$.dispatch(new EditMealSelected(meal));
  }
  deleteMeal(name,date)
  {
    let niz:Number[]=[];
    niz.push(date.year);
    niz.push(date.month);
    niz.push(date.day);
    console.log(name);
    console.log(date);
    this.store$.dispatch(new DeleteMyMeal(this.user,name,niz));
  }

}
