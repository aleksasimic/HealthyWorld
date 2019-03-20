import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ViewHomeComponent } from './components/view-home/view-home.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ViewLoginComponent } from './components/view-login/view-login.component';
import { DailyPlanComponent } from './components/daily-plan/daily-plan.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import { ViewMarketComponent } from './components/view-market/view-market.component';
import { ProductComponent } from './components/product/product.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import {CategoriesComponent} from './components/categories/categories.component';
import {PostListComponent}from './components/post-list/post-list.component';
import {PostComponent}from './components/post/post.component';
const routes: Routes = [
  { path: '', component: ViewLoginComponent },
  { path: 'home', component: ViewHomeComponent },
  { path: 'profile', component: ViewProfileComponent },
  { path:'daily-plan',component:DailyPlanComponent},
  { path:'meal-list',component:MealListComponent},
  { path:'market',component:ViewMarketComponent},
  {path:'product',component:ProductViewComponent},
  {path:'categories',component:CategoriesComponent},
  {path:'postList',component: PostListComponent},
  {path:'post',component: PostComponent},



];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
