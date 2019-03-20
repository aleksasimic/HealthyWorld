import { Component, OnInit,Input } from '@angular/core';
import { DatePipe } from '@angular/common';
import {formatDate} from '@angular/common';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import {User} from "../../models/user";
import { Post } from 'src/app/models/post';
import {Comment}from "src/app/models/comment";
import {AddPost} from 'src/app/store/actions/actions';
@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css'],
  providers: [DatePipe]
})
export class CreatePostComponent implements OnInit {
  @Input()
  post: string;
  @Input()
  category: string;

  @Input()
  tittle:string;

 myDate=new Date();
comments:Comment[];
  user$:Observable<User[]>;
  user:User;
  category$:Observable<string[]>;
constructor(private datePipe: DatePipe,private store$: Store<State>){
  //  formatDate(this.myDate, 'yyyy/MM/dd', 'en');
   this.user$=this.store$.select(state=>state.user);
   this.category$=this.store$.select(state=>state.category);
   this.category=null;
  this.user=null;
    console.log(this.myDate);

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

    this.category$.subscribe(categories => {
      if(categories === undefined) {
        return;
      }
      categories.forEach(category => {this.category = category 
        console.log("usao u category!")
      console.log(category);
      });
    });
  

  }
  addPost(){

    console.log('addPost()');
    console.log(this.user);
    this.user.date = new Date();
   // this.user.username = this.user.username.split(' ').join('');
  this.comments=[];
    const post = new Post(this.category,this.user.username,this.tittle,this.post,this.user.date,this.comments,this.user.img);
    console.log(post);
    
    this.store$.dispatch(new AddPost(post));
 //   this.data = new Data(0,0,0);
 //   this.time = new Time(0,0);
 //   this.origin='';
 //   this.destination='';
    this.post='';
    this.tittle='';
   // this.stops=[];
   

  }}


