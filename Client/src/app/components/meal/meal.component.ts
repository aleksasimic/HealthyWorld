import { Component, OnInit, Input } from '@angular/core';
import { Meal } from 'src/app/models/meal';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Date } from 'src/app/models/date';
import { Time } from 'src/app/models/time';
import { AddToMyMeals } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-meal',
  templateUrl: './meal.component.html',
  styleUrls: ['./meal.component.css']
})
export class MealComponent implements OnInit {

  @Input() 
  public meal: Meal
  @Input()
  time: Time;


  user: User;
  date:Number[];
  user$: Observable<User[]>;
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
  addtoMyMeals(ingridients,name,type,description,addedby,recipe,kcals,protein,fat,img){
    if(this.time!==undefined)
    {
    let m:Meal;
    m=new Meal(ingridients,name,type,description,addedby,recipe,new Date(this.date[0],this.date[1],this.date[2]),this.time,kcals,protein,fat,img);
    let niz:Number[]=[];
     niz.push(this.time.hour);
     niz.push(this.time.minute);
    console.log(m);
    console.log(this.user);
    console.log(this.date);
    console.log(this.time);
    console.log("addtoMyMeals()");

     this.store$.dispatch(new AddToMyMeals(m,this.user,this.date,niz));
    }
  }

}
