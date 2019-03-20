import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { Observable } from 'rxjs';
import { AddBreakfast, AddLunch, ADD_DINNER, AddMeal, RequestAllfoods } from 'src/app/store/actions/actions';
import { User } from 'src/app/models/user';
import { Meal } from 'src/app/models/meal';
import { Food } from 'src/app/models/food';

@Component({
  selector: 'app-add-meal',
  templateUrl: './add-meal.component.html',
  styleUrls: ['./add-meal.component.css']
})
export class AddMealComponent implements OnInit {


  @Input()
  mealname:String;
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
  mealimg:String;


  mealtype:String;

  
  user: User;
  user$: Observable<User[]>;

  foodchosen:Food[];
  foodchosen$:Observable<Food[]>;

  constructor(private store$:Store<State>) { 
    this.user$ = this.store$.select(state => state.user); 
    this.foodchosen$=this.store$.select(state=>state.foodchosen);
  }

  ngOnInit() {  
    this.user$.subscribe(users => {
    users.forEach( user => {
      if(user !== undefined && user !== null) {
        this.user = user;
      }
    });
  });
  this.foodchosen$.subscribe(food=>{
    this.foodchosen=food;
  })
  }
  findIngridents(){
    console.log("U FIND INGRIDIENTS SAM");
    console.log(this.mealname);
    console.log(this.mealdescription);
    console.log(this.mealrecipe);
    console.log(this.mealkcals);
    console.log(this.mealprotein);
    console.log(this.mealfat);
    this.store$.dispatch(new RequestAllfoods());
  }
  breakfastSelected()
  {
    this.mealtype="Breakfast";
    
  }
  dinnerSelected()
  {
    this.mealtype="Dinner";
  }
  lunchSelected()
  {
    this.mealtype="Lunch";
  }
  submit()
  {
    console.log("u submitu sam");
    console.log(this.foodchosen);
    this.store$.dispatch(new AddMeal(new Meal(this.foodchosen,this.mealname,this.mealtype,this.mealdescription,this.user.username,this.mealrecipe,null,null,this.mealkcals,this.mealprotein,this.mealfat,this.mealimg)));

  }
}
