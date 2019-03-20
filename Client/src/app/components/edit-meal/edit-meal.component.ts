import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { EditMealSubmited } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-edit-meal',
  templateUrl: './edit-meal.component.html',
  styleUrls: ['./edit-meal.component.css']
})
export class EditMealComponent implements OnInit {

  @Input()
  mealdescription:String;
  @Input()
  mealrecipe:String;
  @Input()
  mealkcals:Number;
  @Input()
  mealprotein:Number;
  @Input()
  mealfat:Number;

  @Input() 
  public meal: Meal

  user: User;
  user$: Observable<User[]>;
  date:Number[];
  date$:Observable<Number[]>;
  constructor(private store$:Store<State>) { 
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
  submit(meal:Meal)
  {
    console.log(this.user);
    console.log(meal);
    console.log(this.date);
    this.store$.dispatch(new EditMealSubmited(this.user,meal,this.date));
  }

}
