import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { SignupComponent } from './components/signup/signup.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ViewMarketComponent } from './components/view-market/view-market.component';
import { ViewProfileComponent } from './components/view-profile/view-profile.component';
import { ViewHomeComponent } from './components/view-home/view-home.component';
import { NavbarLoginComponent } from './components/navbar-login/navbar-login.component';
import { AppRoutingModule } from './/app-routing.module';
import { ViewLoginComponent } from './components/view-login/view-login.component';
import { StoreModule } from '@ngrx/store';
import { rootReducer } from './store/store';
import { EffectsModule } from '@ngrx/effects';
import { effects } from './store/effects/effects';
import { DailyPlanComponent } from './components/daily-plan/daily-plan.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FoodComponent } from './components/food/food.component';
import { FoodListComponent } from './components/food-list/food-list.component';
import { MealComponent } from './components/meal/meal.component';
import { MealListComponent } from './components/meal-list/meal-list.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { MealMyComponent } from './components/meal-my/meal-my.component';
import { MealListMyComponent } from './components/meal-list-my/meal-list-my.component';
import { AddMealComponent } from './components/add-meal/add-meal.component';
import { DailyPlanLeftsideComponent } from './components/daily-plan-leftside/daily-plan-leftside.component';
import { DailyPlanRightsideComponent } from './components/daily-plan-rightside/daily-plan-rightside.component';
import { DailyPlanCenterComponent } from './components/daily-plan-center/daily-plan-center.component';
import { AddSnackComponent } from './components/add-snack/add-snack.component';
import { SettingsComponent } from './components/settings/settings.component';
import { SnackComponent } from './components/snack/snack.component';
import { SnackMyComponent } from './components/snack-my/snack-my.component';
import { SnackListComponent } from './components/snack-list/snack-list.component';
import { SnackListMyComponent } from './components/snack-list-my/snack-list-my.component';
import { EditMealComponent } from './components/edit-meal/edit-meal.component';
import { EditSnackComponent } from './components/edit-snack/edit-snack.component';
import { FoodListSelectedComponent } from './components/food-list-selected/food-list-selected.component';
import { FoodSelectedComponent } from './components/food-selected/food-selected.component';
import { PriceComponent } from './components/price/price.component';
import { ProductComponent } from './components/product/product.component';
import { ProductAddComponent } from './components/product-add/product-add.component';
import { ProductFindComponent } from './components/product-find/product-find.component';
import { ProductCategoriesComponent } from './components/product-categories/product-categories.component';
import { ProductChangeComponent } from './components/product-change/product-change.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductSortComponent } from './components/product-sort/product-sort.component';
import { ProductViewComponent } from './components/product-view/product-view.component';
import { ReviewComponent } from './components/review/review.component';
import { TagCategorieComponent } from './components/tag-categorie/tag-categorie.component';
import { ProductSmallComponent } from './components/product-small/product-small.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { PostListComponent } from './components/post-list/post-list.component';
import { PostComponent } from './components/post/post.component';
import { CreatePostComponent } from './components/create-post/create-post.component';
import { ProductFavoriteComponent } from './components/product-favorite/product-favorite.component';





@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    ViewMarketComponent,
    ViewProfileComponent,
    ViewHomeComponent,
    NavbarLoginComponent,
    ViewLoginComponent,
    DailyPlanComponent,
    FoodComponent,
    FoodListComponent,
    MealComponent,
    MealListComponent,
    MealMyComponent,
    MealListMyComponent,
    AddMealComponent,
    DailyPlanLeftsideComponent,
    DailyPlanRightsideComponent,
    DailyPlanCenterComponent,
    AddSnackComponent,
    SettingsComponent,
    SnackComponent,
    SnackMyComponent,
    SnackListComponent,
    SnackListMyComponent,
    EditMealComponent,
    EditSnackComponent,
    FoodListSelectedComponent,
    FoodSelectedComponent,
    PriceComponent,
    ProductComponent,
    ProductAddComponent,
    ProductFindComponent,
    ProductCategoriesComponent,
    ProductChangeComponent,
    ProductListComponent,
    ProductSortComponent,
    ProductViewComponent,
    ReviewComponent,
    TagCategorieComponent,
    ProductSmallComponent,
    CategoriesComponent,
    PostListComponent,
    PostComponent,
    CreatePostComponent,
    ProductFavoriteComponent,
 

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    DragDropModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot(effects)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
