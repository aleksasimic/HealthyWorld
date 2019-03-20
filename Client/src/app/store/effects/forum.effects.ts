import { Injectable } from "@angular/core";
import { switchMap,map } from 'rxjs/operators';
import { Effect, Actions } from '@ngrx/effects';
import * as myActions from '../actions/actions';
import { async } from "@angular/core/testing";
import { from, Observable } from "rxjs";
import { User } from "src/app/models/user";
import {MongodbService} from 'src/app/services/mongodb.service';

@Injectable()
export class ForumEffects {
    constructor(
 
        private actions$: Actions,
        private mongo:MongodbService,
    ) {}



    @Effect() 
    findPosts$ = this.actions$.ofType(myActions.FIND_CATEGORIES)
    .pipe(
         switchMap((action) => {
             const category = (action as myActions.FindCategories).category
             return from(this.mongo.getAllPosts(category))
             .pipe( 
                 map( posts => {
                     console.log("Effects za find posts");
                    console.log(posts);
                     return new myActions.FindCategoriesSuccess(posts) //prosledjuje usera u reducer
                 })
             );
         })
    );


    @Effect() 
    post$ = this.actions$.ofType(myActions.ADD_POST)
    .pipe(
        switchMap((action) => {
           const post = (action as myActions.AddPost).post;
           console.log(post);
           console.log("Usao u effects");
            return from(this.mongo.addPost(post))
            .pipe(
                map( ride => {
                    console.log("Effects!!!");
                    return new myActions.AddPostSuccess(ride);
                })
            );
        })
    );

    @Effect() 
     addComment$ = this.actions$.ofType(myActions.ADD_COMMENT)
    .pipe(
        switchMap((action) => {
           const post = (action as myActions.AddComment).editPost;
           console.log(post);
           console.log("Usao u effects");
            return from(this.mongo.addComment(post))
            .pipe(
                map( post => {
                    console.log("Vracen iz bazeee!!!");
                    console.log(post);
                    return new myActions.AddCommentSuccess(post);
                })
            );
        })
    );

    @Effect() 
    addLike$ = this.actions$.ofType(myActions.ADD_LIKE)
   .pipe(
       switchMap((action) => {
          const post = (action as myActions.AddLike).editPost;
          console.log(post);
          console.log("Usao u effects");
           return from(this.mongo.addLike(post))
           .pipe(
               map( post => {
                   console.log("Vracen iz bazeee!!!");
                   console.log(post);
                   return new myActions.AddLikeSuccess(post);
               })
           );
       })
   );



   @Effect() 
   addDislike$ = this.actions$.ofType(myActions.ADD_DISLIKE)
  .pipe(
      switchMap((action) => {
         const post = (action as myActions.AddDislike).editPost;
         console.log(post);
         console.log("Usao u effects");
          return from(this.mongo.addDislike(post))
          .pipe(
              map( post => {
                  console.log("Vracen iz bazeee!!!");
                  console.log(post);
                  return new myActions.AddDislikeSuccess(post);
              })
          );
      })
  );

    
}