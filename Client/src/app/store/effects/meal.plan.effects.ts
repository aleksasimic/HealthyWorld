import { Injectable } from "@angular/core";
import { switchMap, map } from 'rxjs/operators';
import { Effect, Actions } from '@ngrx/effects';

import * as myActions from '../actions/actions';
import { async } from "@angular/core/testing";
import { from, Observable } from "rxjs";
import { User } from "src/app/models/user";
import { MongodbService } from "src/app/services/mongodb.service";

@Injectable()
export class MealPlanEffects {
    constructor(
        private actions$: Actions,
        private mongo:MongodbService,
    ) {}

    @Effect() 
    logIn$ = this.actions$.ofType(myActions.LOG_IN)
    .pipe(
        switchMap((action) => {
            const user = (action as myActions.LogIn).user;
            // return from(this.redis.logInUser(user)) // vraca promise
            // .pipe(
            //     map( logInUser => {
            //         return new myActions.LogInSuccess(logInUser, true);
            //     })
            // );
            return new Observable(); // cisto da nema errora
        })
    );
    @Effect() 
    addmeal$ = this.actions$.ofType(myActions.ADD_MEAL)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS ADD MEAL");
            const meal = (action as myActions.AddMeal).meal;
            return from(this.mongo.addMeal(meal))
            .pipe(
                map( users => {
                    return new Observable();
                })
            );
        })
    );
    @Effect() 
    addsnack$ = this.actions$.ofType(myActions.ADD_SNACK)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS ADD SNACK");
            const snack = (action as myActions.AddSnack).snack;
            return from(this.mongo.addSnack(snack))
            .pipe(
                map( users => {
                    return new Observable();
                })
            );
        })
    );
    @Effect() 
    recommendmeals$ = this.actions$.ofType(myActions.RECOMMEND_MEALS)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS RECOMMEND MEAL");
            const type = (action as myActions.RecommendMeals).mytype;
            const kcals= (action as myActions.RecommendMeals).kcals;
            return from(this.mongo.recommendMeals(type,kcals))
            .pipe(
                map( meals => {
                    console.log("VRATIO SAM SE RM");
                    console.log(meals);
                    return new myActions.RecommendMealsArrived(meals);
                })
            );
        })
    );
    @Effect() 
    recommendsnacks$ = this.actions$.ofType(myActions.RECOMMEND_SNACKS)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS RECOMMEND SNACKS");
            const type = (action as myActions.RecommendSnacks).mytype;
            const kcals=(action as myActions.RecommendSnacks).kcals;
            return from(this.mongo.recommendSnacks(type,kcals))
            .pipe(
                map( snacks => {
                    console.log("VRATIO SAM SE RS");
                    return new myActions.RecommendSnacksArrived(snacks);
                })
            );
        })
    );
    @Effect() 
    addtomymeals$ = this.actions$.ofType(myActions.ADD_TO_MY_MEALS)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS ADD TO MY MEALS");
            const meal = (action as myActions.AddToMyMeals).meal;
            const date=(action as myActions.AddToMyMeals).date;
            const time=(action as myActions.AddToMyMeals).time;
            const user=(action as myActions.AddToMyMeals).user;
            return from(this.mongo.addToMyMeals(meal,user,date,time))
            .pipe(
                map( meals => {
                    console.log("VRATIO SAM SE ADD MY MEALS");
                    if(meals.length!==0)
                        return new myActions.MyMealsArrived(meals);
                    else 
                        return new myActions.MealsOverload();
                })
            );
        })
    );
    @Effect() 
    addtomysnacks$ = this.actions$.ofType(myActions.ADD_TO_MY_SNACKS)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS ADD TO MY SNACKS");
            const snack = (action as myActions.AddToMySnacks).snack;
            const date=(action as myActions.AddToMySnacks).date;
            const user=(action as myActions.AddToMySnacks).user;
            return from(this.mongo.addToMySnacks(snack,user,date))
            .pipe(
                map( snacks => {
                    console.log("VRATIO SAM SE ADD MY SNACKS");
                    if(snacks.length!==0)
                     return new myActions.MySnacksArrived(snacks);
                    else
                     return new myActions.SnacksOverload();
                })
            );
        })
    );
    @Effect() 
    viewmymeals$ = this.actions$.ofType(myActions.VIEW_MY_MEALS)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS VIEW MY MEALS");
            const date=(action as myActions.ViewMyMeals).date;
            const user=(action as myActions.ViewMyMeals).user;
            return from(this.mongo.viewMyMeals(user,date))
            .pipe(
                map( meals => {
                    console.log("VRATIO SAM SE VIEW MY MEALS");
                    return new myActions.MyMealsArrived(meals);
                })
            );
        })
    );
    @Effect() 
    viewmysnacks$ = this.actions$.ofType(myActions.VIEW_MY_SNACKS)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS VIEW MY SNACKS");
            const date=(action as myActions.ViewMySnacks).date;
            const user=(action as myActions.ViewMySnacks).user;
            return from(this.mongo.viewMySnacks(user,date))
            .pipe(
                map( snacks => {
                    console.log("VRATIO SAM SE ADD MY SNACKS");
                    return new myActions.MySnacksArrived(snacks);
                })
            );
        })
    );

    @Effect() 
    deletemymeal$ = this.actions$.ofType(myActions.DELETE_MY_MEAL)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS DELETE MY MEAL");
            const date=(action as myActions.DeleteMyMeal).date;
            const user=(action as myActions.DeleteMyMeal).user;
            const mealname=(action as myActions.DeleteMyMeal).mealname;
            return from(this.mongo.deleteMyMeal(user,mealname,date))
            .pipe(
                map( meals => {
                    console.log("VRATIO SAM SE DELETE MY MEAL");
                    return new myActions.MyMealsArrived(meals);
                })
            );
        })
    );
    @Effect() 
    deletemysnack$ = this.actions$.ofType(myActions.DELETE_MY_SNACK)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS DELETE MY SNACK");
            const date=(action as myActions.DeleteMySnack).date;
            const user=(action as myActions.DeleteMySnack).user;
            const snackname=(action as myActions.DeleteMySnack).snackname;
            return from(this.mongo.deleteMySnack(user,snackname,date))
            .pipe(
                map( snacks => {
                    console.log("VRATIO SAM SE DELETE MY MEAL");
                    return new myActions.MySnacksArrived(snacks);
                })
            );
        })
    );
    @Effect() 
    editmealsubmited$ = this.actions$.ofType(myActions.EDIT_MEAL_SUBMITED)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS EDIT MEAL SUBMITED");
            const meal=(action as myActions.EditMealSubmited).meal;
            const user=(action as myActions.EditMealSubmited).user;
            const date=(action as myActions.EditMealSubmited).date;
            return from(this.mongo.editMyMeal(user,meal,date))
            .pipe(
                map( meals => {
                    console.log("VRATIO SAM SE EDIT MEAL SUBMITED");
                    return new myActions.MyMealsArrived(meals);
                })
            );
        })
    );
    @Effect() 
    editsnacksubmited$ = this.actions$.ofType(myActions.EDIT_SNACK_SUBMITED)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS EDIT SNACK SUBMITED");
            const snack=(action as myActions.EditSnackSubmited).snack;
            const user=(action as myActions.EditSnackSubmited).user;
            const date=(action as myActions.EditSnackSubmited).date;
            return from(this.mongo.editMySnack(user,snack,date))
            .pipe(
                map( snacks => {
                    console.log("VRATIO SAM SE EDIT SNACK SUBMITED");
                    return new myActions.MySnacksArrived(snacks);
                })
            );
        })
    );
    @Effect() 
    requestallfood$ = this.actions$.ofType(myActions.REQUEST_ALL_FOODS)
    .pipe(
        switchMap((action) => {
            console.log("EFFECTS REQUEST ALL FOODS");
            return from(this.mongo.requestAllFood())
            .pipe(
                map( food => {
                    console.log("VRATIO SAM SE REQUEST ALL FOODS");
                    return new myActions.AllFoodsArrived(food);
                })
            );
        })
    );

}