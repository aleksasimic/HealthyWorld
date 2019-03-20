import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import {FindCategories,ActiveCategory} from 'src/app/store/actions/actions';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css'],
})
export class CategoriesComponent implements OnInit {

  @Input() 
  public filtered:string
  

  constructor( private store$: Store<State>) { }

  ngOnInit() {
  }
  findArticlesOrganicFood(){

  this.filtered="organicFood";
  console.log(this.filtered);
  this.store$.dispatch(new FindCategories(this.filtered));
  this.store$.dispatch(new ActiveCategory(this.filtered));

  }
  findArticlesNutrition(){

   this.filtered="nutrition";
  console.log(this.filtered);
  this.store$.dispatch(new FindCategories(this.filtered));
  this.store$.dispatch(new ActiveCategory(this.filtered));


  }
  findArticlesLifestyle(){
    this.filtered="lifestyle";
  console.log(this.filtered);
  this.store$.dispatch(new FindCategories(this.filtered));
  this.store$.dispatch(new ActiveCategory(this.filtered));
  }
  findArticleBenefites(){
    this.filtered="benefites";
    console.log(this.filtered);
    this.store$.dispatch(new FindCategories(this.filtered));
    this.store$.dispatch(new ActiveCategory(this.filtered));
  }
  findArticlesNetNews(){
    this.filtered="netNews";
    console.log(this.filtered);
    this.store$.dispatch(new FindCategories(this.filtered));
    this.store$.dispatch(new ActiveCategory(this.filtered));

  }
  findArticlesdidYoyKnow(){
    this.filtered="didYouKnow";
    console.log(this.filtered);
    this.store$.dispatch(new FindCategories(this.filtered));
    this.store$.dispatch(new ActiveCategory(this.filtered));
  }
  findArticlesAgriculture(){
    this.filtered="agriculture";
    console.log(this.filtered);
    this.store$.dispatch(new FindCategories(this.filtered));
    this.store$.dispatch(new ActiveCategory(this.filtered));

  }

  findArticlesRecipes(){
    this.filtered="reicipes";
    console.log(this.filtered);
    this.store$.dispatch(new FindCategories(this.filtered));
    this.store$.dispatch(new ActiveCategory(this.filtered));
 
  }

}
