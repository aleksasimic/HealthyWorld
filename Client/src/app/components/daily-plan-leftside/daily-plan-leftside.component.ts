import { Component, OnInit, Input } from '@angular/core';
import { Time } from 'src/app/models/time';
import { Date } from 'src/app/models/date';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { Observable } from 'rxjs';
import { RECOMMEND_MEALS, RecommendMeals, RecommendSnacks, DateChosen, ViewMyMeals, ViewMySnacks } from 'src/app/store/actions/actions';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-daily-plan-leftside',
  templateUrl: './daily-plan-leftside.component.html',
  styleUrls: ['./daily-plan-leftside.component.css']
})
export class DailyPlanLeftsideComponent implements OnInit {

  @Input()
  date: Date;
  @Input()
  time: Time;
  @Input()
  weight:number;
 
  @Input()
  bodyfat:Number;

  male=false;
  result:number;
  breakfastkcals:number;
  lunchkcals:number;
  dinnerkcals:number;
  onesnackkcals:number;

  user: User;
  user$: Observable<User[]>;
  constructor(private store$:Store<State>) {
    this.user$ = this.store$.select(state => state.user); 
   }

  ngOnInit() {
    this.user$.subscribe(users => {
      users.forEach( user => {
        if(user !== undefined && user !== null) {
          this.user = user;
        }
      });
    });
  }
  onDateSelect()
  {
    console.log("U EVENTU SAM");
    let niz:Number[]=[];
    niz.push(this.date.year);
    niz.push(this.date.month);
    niz.push(this.date.day);
    this.store$.dispatch(new DateChosen(niz));
    this.store$.dispatch(new ViewMyMeals(this.user,niz));
    this.store$.dispatch(new ViewMySnacks(this.user,niz));
    console.log(this.date);
   
  }
  calculateCalories()
  {    
    if(this.male)
    {
      const leanfactor=this.getLeanFactorM(this.bodyfat);
      this.result=this.weight*1.0*24*leanfactor;
    }
    else 
    {
      const leanfactor=this.getLeanFactorF(this.bodyfat);
      this.result=this.weight*1.0*24*leanfactor;
    }
    this.breakfastkcals=this.result/3;
    this.lunchkcals=this.result/4;
    this.dinnerkcals=3*this.result/12;
    this.onesnackkcals=2*this.result/12;
    console.log(this.breakfastkcals);
    console.log(this.lunchkcals);
    console.log(this.dinnerkcals);
    console.log(this.onesnackkcals);

  }
  recommendBreakfasts(){
    console.log("RECOMMEND BREAKFASTS");
    this.store$.dispatch(new RecommendMeals("Breakfast",this.breakfastkcals));
  }
  recommendLunches(){
    console.log("RECOMMEND LUNCHES");
    this.store$.dispatch(new RecommendMeals("Lunch",this.lunchkcals));
  }
  recommendDinners(){
    this.store$.dispatch(new RecommendMeals("Dinner",this.dinnerkcals));
  }
  recommendSnacks(){
    console.log("U RECOMMEND SNACKS SAM");
    this.store$.dispatch(new RecommendSnacks("Snack",this.onesnackkcals));
  }
  mChanged(event) {
  this.male=!this.male;
  console.log(this.male);
  }
   fChanged(event) {

    if(this.male)
      this.male=!this.male;
    console.log(this.male);
  }
  getLeanFactorM(bodyfat)
  {
    if(bodyfat>=10 && bodyfat<=14)
      return 1.0;
    if(bodyfat>=15 && bodyfat<=20)
      return 0.95;
    if(bodyfat>=21 && bodyfat<=28)
      return 0.9;
    if(bodyfat>=28)
      return 0.85;
  }
  getLeanFactorF(bodyfat)
  {
    if(bodyfat>=14 && bodyfat<=18)
      return 1.0;
    if(bodyfat>=19 && bodyfat<=28)
      return 0.95;
    if(bodyfat>=29 && bodyfat<=38)
      return 0.9;
    if(bodyfat>=39)
      return 0.85;
  }
 
}

