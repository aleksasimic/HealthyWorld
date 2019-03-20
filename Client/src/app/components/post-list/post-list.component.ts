import { Component, OnInit,Input,Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import {Post} from '../../models/post';
import {SelectPost} from "src/app/store/actions/actions";
import {CategoriesComponent} from '../categories/categories.component';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css'],
})
export class PostListComponent implements OnInit {


  findPosts$:Observable<Post[]>;
  filteredPosts:Post[];
  category$:Observable<string[]>;

  @Input() 
  selectedPost:Post;

  
  @Input()
  category:string;
  constructor( private route: ActivatedRoute,
    private store$: Store<State>) {
      this.findPosts$ = this.store$.select(state => state.posts);
      this.category$=this.store$.select(state=>state.category);
      this.filteredPosts=[];
      this.category=null;
     }

  ngOnInit() {

    this.findPosts$.subscribe((findPosts) => {
      if ( findPosts !== undefined) {
        //findPosts.forEach(p => {
          this.filteredPosts=findPosts;
          // console.log({user});
          // this.store$.dispatch(new GetFoldersFromDatabaseForUser(this.user));
        //});
        console.log(this.filteredPosts);
      }

    });

  
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


  select(post:Post){
    //this.selectPost.emit(post);
    this.store$.dispatch(new SelectPost(post));
    console.log("ovo je post!")
   console.log(post);    
  }

}
