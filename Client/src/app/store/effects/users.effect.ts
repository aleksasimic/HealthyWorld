import { Injectable } from "@angular/core";
import { switchMap, map } from 'rxjs/operators';
import { Effect, Actions } from '@ngrx/effects';

import * as myActions from '../actions/actions';
import { async } from "@angular/core/testing";
import { from, Observable } from "rxjs";
import { User } from "src/app/models/user";
import { MongodbService } from "src/app/services/mongodb.service";

@Injectable()
export class UsersEffects {
    constructor(
        private actions$: Actions,
        private mongodb: MongodbService
    ) {}

    @Effect() 
    updateUser$ = this.actions$.ofType(myActions.UPDATE_USER)
    .pipe(
        switchMap((action) => {
            let u = (action as myActions.UpdateUser).user;
            let user = new User(u.username,u.surname,u.name,u.password,u.email,u.phoneNumber,u.date,u.likes,u.dislikes,u.products,u.nP,u.favoriteProducts,u.nLikes);
            return from(this.mongodb.postObject(user,'/user/update')) // vraca promise
            .pipe(
                map( updatedUser => {
                    return new myActions.UpdateUserSuccess(updatedUser);
                })
            );
        })
    );

    @Effect() 
    signUp$ = this.actions$.ofType(myActions.SIGN_UP)
    .pipe(
        switchMap((action) => {
            const user = (action as myActions.SignUp).user;
            return from(this.mongodb.addUser(user)) // vraca promise
            .pipe(
                map( logInUser => {
                    return new myActions.LogInSuccess(logInUser, true);
                })
            );
        })
    );
    @Effect() 
    logIn$ = this.actions$.ofType(myActions.LOG_IN)
    .pipe(
        switchMap((action) => {
            const user = (action as myActions.LogIn).user;
            return from(this.mongodb.logInUser(user)) // vraca promise
            .pipe(
                map( logInUser => {
                    return new myActions.LogInSuccess(logInUser, true);
                })
            );
        })
    );
}