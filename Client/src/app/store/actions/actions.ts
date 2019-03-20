import { Action } from "@ngrx/store";
import { User } from "src/app/models/user";
import { Meal } from "src/app/models/meal";
import { Snack } from "src/app/models/snack";
import { Product } from "src/app/models/product";
import { Food } from "src/app/models/food";
import { ProductFind } from "src/app/models/productFind";
import {Post} from "src/app/models/post";
import {Comment}from "src/app/models/comment";

// Log IN/Log OUT/Sign UP section const//
export const LOG_IN = "LOG_IN"; 
export const LOG_IN_SUCCESS = "LOG_IN_SUCCESS";
export const LOG_IN_UNSUCCESSFUL = "LOG_IN_UNSUCCESSFUL";

export const LOG_OUT = "LOG_OUT";

export const SIGN_UP = "SIGN_UP";
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS";
export const SIGN_UP_UNSUCCESSFUL = 'SIGN_UP_UNSUCCESSFUL';
// Log IN/Log OUT/Sign UP section const//

// Product CONST//
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const ADD_PRODUCT_SUCCESS = 'ADD_PRODUCT_SUCCESS';
// new new
export const GET_ALL_PRODUCTS = 'GET_ALL_PRODUCTS';
export const GET_ALL_PRODUCTS_SUCCESS = 'GET_ALL_PRODUCTS_SUCCESS';

export const VIEW_PRODUCT = 'VIEW_PRODUCT';
export const VIEW_PRODUCT_SUCCESS = 'VIEW_PRODUCTT_SUCCESS';

export const ADD_REVIEW_PRODUCT = 'ADD_REVIEW_PRODUCT'; 
export const ADD_REVIEW_PRODUCT_SUCCESS = 'ADD_REVIEW_PRODUCTT_SUCCESS'; 

export const UPDATE_PRODUCT = 'UPDATE_PRODUCT';
export const UPDATE_PRODUCT_SUCCESS = 'UPDATE_PRODUCTT_SUCCESS';

export const FIND_PRODUCT = 'FIND_PRODUCT';
export const FIND_PRODUCT_SUCCESS = 'FIND_PRODUCT_SUCCESS';
export const SORT_PRODUCTS = 'SORT_PRODUCTS'; 

export const DELETE_PRODUCT = 'DELETE_PRODUCT';
export const DELETE_PRODUCT_SUCCESS = 'DELETE_PRODUCTT_SUCCESS';

// Product CONST//
// Food //
// Food CONST //
export const ADD_FOOD = 'ADD_FOOD';

// Food CONST //
// Food ACTIONS //
export class AddFood implements Action {
    type: string = ADD_FOOD;
    constructor(public food: Food) {}
}
// Food ACTIONS //
// Food //

//Daily meal plan const section start//
/////////////////////////////////////// 
export const ADD_BREAKFAST="ADD_BREAKFAST";
export const ADD_LUNCH="ADD_LUNCH";
export const ADD_DINNER="ADD_DINNER";
export const ADD_SNACK_ONE="ADD_SNACK_ONE";
export const ADD_SNACK_TWO="ADD_SNACK_TWO";

export const UPDATE_BREAKFAST="UPDATE_BREAKFAST";
export const UPDATE_LUNCH="UPDATE_LUNCH";
export const UPDATE_DINNER="UPDATE_DINNER";
export const UPDATE_SNACK_ONE="UPDATE_SNACK_ONE";
export const UPDATE_SNACK_TWO="UPDATE_SNACK_TWO";

export const DELETE_BREAKFAST="DELETE_BREAKFAST";
export const DELETE_LUNCH="DELETE_LUNCH";
export const DELETE_DINNER="DELETE_DINNER";
export const DELETE_SNACK_ONE="DELETE_SNACK_ONE";
export const DELETE_SNACK_TWO="DELETE_SNACK_TWO";

export const RECOMMEND_MEALS="RECOMMEND_MEALS";
export const RECOMMEND_SNACKS="RECOMMEND_SNACKS";
export const RECOMMEND_MEALS_ARRIVED="RECOMMEND_MEALS_ARRIVED";
export const RECOMMEND_SNACKS_ARRIVED="RECOMMEND_SNACKS_ARRIVED";
export const ADD_MEAL="ADD_MEAL";
export const ADD_SNACK="ADD_SNACK";
export const DATE_CHOSEN="DATE_CHOSEN";
export const ADD_TO_MY_MEALS="ADD_TO_MY_MEALS";
export const ADD_TO_MY_SNACKS="ADD_TO_MY_SNACKS";
export const MY_MEALS_ARRIVED="MY_MEALS_ARRIVED";
export const MY_SNACKS_ARRIVED="MY_SNACKS_ARRIVED";
export const VIEW_MY_MEALS="VIEW_MY_MEALS";
export const VIEW_MY_SNACKS="VIEW_MY_SNACKS";
export const DELETE_MY_MEAL="DELETE_MY_MEAL";
export const DELETE_MY_SNACK="DELETE_MY_SNACK";
export const EDIT_MEAL_SELECTED="EDIT_MEAL_SELECTED";
export const EDIT_SNACK_SELECTED="EDIT_SNACK_SELECTED";
export const EDIT_MEAL_SUBMITED="EDIT_MEAL_SUBMITED";
export const EDIT_SNACK_SUBMITED="EDIT_SNACK_SUBMITED";
export const REQUEST_ALL_FOODS="REQUEST_ALL_FOODS";
export const ALL_FOODS_ARRIVED="ALL_FOODS_ARRIVED";
export const FOOD_SELECTED="FOOD_SELECTED";
export const FOOD_UNSELECTED="FOOD_UNSELECTED";
export const SNACKS_OVERLOAD="SNACKS_OVERLOAD";
export const MEALS_OVERLOAD="MEALS_OVERLOAD";
//Daily meal plan const section end
///////////////////////////////////

////////////////////FORUM//////////////
export const FIND_CATEGORIES="FIND_RIDES";
export const FIND_CATEGORIES_SUCCESS="FIND_RIDES_SUCCESS";
export const ACTIVE_CATEGORY="ACTIVE_CATEGORY";
export const ADD_POST="ADD_POST";
export const ADD_POST_SUCCESS="ADD_POST_SUCCESS";
export const SELECT_POST="SELECT_POST";
export const ADD_COMMENT="ADD_COMMENT";
export const ADD_COMMENT_SUCCESS="ADD_COMMENT_SUCCESS";
export const ADD_LIKE="ADD_LIKE";
export const ADD_LIKE_SUCCESS="ADD_LIKE_SUCCESS";
export const ADD_DISLIKE="ADD_DISLIKE";
export const ADD_DISLIKE_SUCCESS="ADD_DISLIKE_SUCCESS";
////////////FORUM/////////////////

// User CONST //
export const UPDATE_USER = 'UPDATE_USER';
export const UPDATE_USER_SUCCESS = 'UPDATE_USER_SUCCESS';
// User CONST //
// User ACTION //
export class UpdateUser implements Action {
    type: string = UPDATE_USER;
    constructor(public user: User) {}
}
export class UpdateUserSuccess implements Action {
    type: string = UPDATE_USER_SUCCESS;
    constructor(public user: User) {}
}
// User ACTION //


//Daily meal plan action section start//
////////////////////////////////////////
export class MealsOverload implements Action {
    type:string=MEALS_OVERLOAD;
    constructor(){
        
    }
}
export class SnacksOverload implements Action {
    type:string=SNACKS_OVERLOAD;
    constructor(){

    }
}
export class FoodUnselected implements Action {
    type:string=FOOD_UNSELECTED;
    constructor(public food:Food){
        
    }
}
export class FoodSelected implements Action {
    type:string=FOOD_SELECTED;
    constructor(public food:Food){
        console.log("U FOOD SELECTED");
    }
}
export class AllFoodsArrived implements Action {
    type:string=ALL_FOODS_ARRIVED;
    constructor(public allfoods:Food[]){
        console.log("U ALL FOODS ARRIVED");
    }
}
export class RequestAllfoods implements Action{
    type:string=REQUEST_ALL_FOODS;
    constructor(){
        console.log("U REQUEST ALL FOODS");
    }
} 
export class EditSnackSubmited implements Action {
    type:string=EDIT_SNACK_SUBMITED;
    constructor (public user:User,public snack:Snack,public date:Number[]){
    }
}
export class EditMealSubmited implements Action {
    type:string=EDIT_MEAL_SUBMITED;
    constructor (public user:User,public meal:Meal,public date:Number[]){
    }
}
export class EditSnackSelected implements Action {
    type:string=EDIT_SNACK_SELECTED;
    constructor(public snack:Snack){}
}
export class EditMealSelected implements Action {
    type:string=EDIT_MEAL_SELECTED;
    constructor(public meal:Meal){}
}
export class DeleteMySnack implements Action {
    type:string=DELETE_MY_SNACK;
    constructor(public user:User,public snackname:String,public date:Number[]){
       
    }
}
export class DeleteMyMeal implements Action {
    type:string=DELETE_MY_MEAL;
    constructor(public user:User,public mealname:String,public date:Number[]){

    }
}
export class ViewMySnacks implements Action {
    type:string=VIEW_MY_SNACKS;
    constructor(public user:User,public date:Number[]){
    }
}
export class ViewMyMeals implements Action {
    type:string=VIEW_MY_MEALS;
    constructor(public user:User,public date:Number[]){
    }
}
export class MySnacksArrived implements Action{
    type:string=MY_SNACKS_ARRIVED;
    constructor(public mysnacks:Snack[]){
        console.log("MY SNACKS ARRIVED");
    }
}
export class MyMealsArrived implements Action{
    type:string=MY_MEALS_ARRIVED;
    constructor(public mymeals:Meal[]){
        console.log("MY MEALS ARRIVED");
    }
}
export class AddToMySnacks implements Action {
    type:string=ADD_TO_MY_SNACKS;
    constructor(public snack:Snack,public user:User,public date:Number[]){
        console.log("ADD TO MY SNACKS ACTION");
    }
}
export class AddToMyMeals implements Action {
    type:string=ADD_TO_MY_MEALS;
    constructor(public meal:Meal,public user:User,public date:Number[],public time:Number[]){
        console.log("ADD TO MY MEALS ACTION");
    }
}
export class DateChosen implements Action {
    type:string =DATE_CHOSEN;
    constructor(public date:Number[]){
        console.log("U DATE CHOSEN SAM");
    }
}
export class RecommendSnacksArrived implements Action {
    
    type: string = RECOMMEND_SNACKS_ARRIVED;
    constructor(public snacks:Snack[]) {
        console.log("U RECOMMEND SNACKS ARRIVED SAM");
    }
}
export class RecommendMealsArrived implements Action {
    
    type: string = RECOMMEND_MEALS_ARRIVED;
    constructor(public meals:Meal[]) {
        console.log("U RECOMMEND MEALS ARRIVED SAM");
    }
}
export class RecommendSnacks implements Action {
    type:string=RECOMMEND_SNACKS;
    constructor(public mytype:String,public kcals:number) {
        console.log("U RECOMMEND SNACKS SAM");
    }
}
export class RecommendMeals implements Action {
    
    type: string = RECOMMEND_MEALS;
    constructor(public mytype:String,public kcals:number) {
        console.log("U RECOMMEND MEALS SAM");
    }
}
export class AddSnack implements Action {
    type: string = ADD_SNACK;
    constructor(public snack:Snack) {
        console.log("U ADD SNACK SAM");
    }
}
export class AddMeal implements Action {
    
    type: string = ADD_MEAL;
    constructor(public meal:Meal) {
        console.log("U ADD MEAL SAM");
    }
}

export class AddBreakfast implements Action {
    type: string = ADD_BREAKFAST;
    constructor(public breakfast:Meal) {}
}
export class AddLunch implements Action {
    type: string = ADD_LUNCH;
    constructor(public lunch:Meal) {}
}
export class AddDinner implements Action {
    type: string = ADD_DINNER;
    constructor(public dinner:Meal) {}
}
export class AddSnackOne implements Action {
    type: string = ADD_SNACK_ONE;
    constructor(public snackone:Snack) {}
}
export class AddSnackTwo implements Action {
    type: string = ADD_SNACK_TWO;
    constructor(public snacktwo:Snack) {}
}

export class UpdateBreakfast implements Action {
    type: string = UPDATE_BREAKFAST;
    constructor(public user: User,public breakfast:Meal) {}
}
export class UpdateLunch implements Action {
    type: string = UPDATE_LUNCH;
    constructor(public user: User,public lunch:Meal) {}
}
export class UpdateSnackOne implements Action {
    type: string = UPDATE_SNACK_ONE;
    constructor(public user: User,public snackone:Snack) {}
}
export class UpdateSnackTwo implements Action {
    type: string = UPDATE_SNACK_TWO;
    constructor(public user: User,public snacktwo:Snack) {}
}

export class DeleteBreakfast implements Action {
    type: string = DELETE_BREAKFAST;
    constructor(public user: User,public breakfast:Meal) {}
}
export class DeleteLunch implements Action {
    type: string = DELETE_LUNCH;
    constructor(public user: User,public lunch:Meal) {}
}
export class DeleteSnackOne implements Action {
    type: string = DELETE_SNACK_ONE;
    constructor(public user: User,public snackone:Snack) {}
}
export class DeleteSnackTwo implements Action {
    type: string = DELETE_SNACK_TWO;
    constructor(public user: User,public snacktwo:Snack) {}
}

//Daily meal plan action section end//
//////////////////////////////////////



////////FORUM////////////////////////////

export class FindCategories implements Action{
    type: string=FIND_CATEGORIES;
    constructor(public category:string)
    {}
    
    }
    
    export class FindCategoriesSuccess implements Action{
        type: string = FIND_CATEGORIES_SUCCESS;
        constructor(public posts:Post[]) {}
    }
    
    export class ActiveCategory implements Action{
        type: string = ACTIVE_CATEGORY;
        constructor(public category:string) {}
    
    
    }
    export class AddPost implements Action{
        type: string = ADD_POST;
        constructor(public post:Post) {}

    }

    export class AddPostSuccess implements Action{
        type: string =ADD_POST_SUCCESS;
        constructor(public post:Post[]) {}
    }
    export class SelectPost implements Action{
       type:string=SELECT_POST;
       constructor(public post:Post){
           console.log("Dosao do select posta");
       }

    }

    export class AddComment implements Action{
    type:string=ADD_COMMENT
    constructor(public editPost:Post){
      console.log("Dosao do add comment-a!");
    }}
    export class AddCommentSuccess implements Action{
        type: string =ADD_COMMENT_SUCCESS;
        constructor(public post:Post) {}
    }

     export class AddLike implements Action{
        type:string=ADD_LIKE
        constructor(public editPost:Post){
          console.log("Dosao do add LIKE-a!");
     }
    }
    export class AddLikeSuccess implements Action{
        type: string =ADD_LIKE_SUCCESS;
        constructor(public post:Post) {}
    }


    export class AddDislike implements Action{
        type:string=ADD_DISLIKE
        constructor(public editPost:Post){
          console.log("Dosao do add DISLIKE-a!");
     }
    }
    export class AddDislikeSuccess implements Action{
        type: string =ADD_DISLIKE_SUCCESS;
        constructor(public post:Post) {}
    }

//////FORUM////////////////////////////
// Log IN/Log OUT/Sign UP section action//
export class LogIn implements Action {
    type: string = LOG_IN;
    constructor(public user: User) {}
}
export class LogInSuccess implements Action {
    type: string = LOG_IN_SUCCESS;
    constructor(public user: User, public success: boolean) {}
}
export class LogOut implements Action {
    type = LOG_OUT;
    constructor () {}
}

export class SignUp implements Action {
    type: string = SIGN_UP;
    constructor(public user: User) {}
}
export class SingUpSuccess implements Action {
    type: string = SIGN_UP_SUCCESS;
    constructor(public user: User) {}
}

export class SingUpUnsuccessful implements Action {
    type: string = SIGN_UP_UNSUCCESSFUL;
    constructor(public error: string) {}
}
// Log IN/Log OUT/Sign Up section action//

// Add Product ACTION//
export class AddProduct implements Action {
    type: string = ADD_PRODUCT;
    constructor(public product: Product) {}
}
export class AddProductSuccess implements Action {
    type: string = ADD_PRODUCT_SUCCESS;
    constructor(public product: Product) {}
}
export class GetAllProducts implements Action {
    type: string = GET_ALL_PRODUCTS;
    constructor() {}
}
export class GetAllProductsSuccess implements Action {
    type: string = GET_ALL_PRODUCTS_SUCCESS;
    constructor(public allProducts: Product[]) {}
}
export class ViewProduct implements Action {
    type: string = VIEW_PRODUCT;
    constructor(public product: Product) {}
}
export class ViewProductSuccess implements Action {
    type: string = VIEW_PRODUCT_SUCCESS;
    constructor(public product: Product) {}
}
export class AddReviewProduct implements Action {
    type: string = ADD_REVIEW_PRODUCT;
    constructor(public product: Product) {}
}
export class AddReviewProductSuccess implements Action {
    type: string = ADD_REVIEW_PRODUCT_SUCCESS;
    constructor(public product: Product) {}
}
export class UpdateProduct implements Action {
    type: string = UPDATE_PRODUCT;
    constructor(public product: Product) {}
}
export class UpdateProductSuccess implements Action {
    type: string = UPDATE_PRODUCT_SUCCESS;
    constructor(public product: Product) {}
}
export class FindProduct implements Action {
    type: string = FIND_PRODUCT;
    constructor(public productFind: ProductFind) {}
}
export class FindProductSuccess implements Action {
    type: string = FIND_PRODUCT_SUCCESS;
    constructor(public productList: Product[]) {}
}
export class SortProducts implements Action {
    type: string = SORT_PRODUCTS;
    constructor(public property: string, public ascendingBool: boolean) {}
}
export class DeleteProduct implements Action {
    type: string = DELETE_PRODUCT;
    constructor(public product: Product) {}
}
export class DeleteProductSuccess implements Action {
    type: string = DELETE_PRODUCT_SUCCESS;
    constructor(public product: Product) {}
}

// Add Product ACTION//