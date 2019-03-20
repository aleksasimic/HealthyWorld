import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import {Post} from "../../models/post";
import {User} from "../../models/user";
import {Comment} from "../../models/comment";
import {AddComment,AddLike,AddDislike}from "src/app/store/actions/actions";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
 
  selectedPosts$:Observable<Post[]>;
   user$:Observable<User[]>;
  user:User;

  @Input() 
  selectedPost:Post;

  @Input() 
  textComment:string;
   
  newComment:Comment;
  constructor(private store$: Store<State>) { 
    this.selectedPosts$ = this.store$.select(state => state.selectedPost);
    this.user$=this.store$.select(state=>state.user);
    this.user=null;
  }

  ngOnInit() {
    if(this.user === null) {
      this.user$.subscribe(users => {
        console.log("Usao gde treba!!!");
        if(users === undefined) {
          return;
        }
        users.forEach(user => {this.user = user 
          console.log("Ovo je user!")
        console.log(user);
        });
      });
    }
    this.selectedPosts$.subscribe((post) => {
      if ( post !== undefined) {
        //findPosts.forEach(p => {
        
          this.selectedPost=post[0];
          // console.log({user});
          // this.store$.dispatch(new GetFoldersFromDatabaseForUser(this.user));
        //});
        console.log("SELEKTOVAN POST U POST.COMPONENT")
        console.log(this.selectedPost);
      }

    });

  }

  addComment(){
     
   var data=new Date();
  const comment=new Comment(this.user.username,this.textComment,0,0,data,this.user.img);
  this.selectedPost.comments.push(comment);
  this.store$.dispatch(new AddComment(this.selectedPost));
  this.textComment='';
  console.log(this.selectedPost);

  }
addLike(comment:Comment){
    this.selectedPost.comments.forEach(el=>
  {
     if(el.username==comment.username&& el.comment==comment.comment){
         el.likes+=1;

     }
  });
  this.store$.dispatch(new AddLike(this.selectedPost));

}

addDislike(comment:Comment){
  this.selectedPost.comments.forEach(el=>
{
  console.log(el);
   if(el.username==comment.username&& el.comment==comment.comment){
       el.dislikes+=1;

   }
});
this.store$.dispatch(new AddDislike(this.selectedPost));

}

}
