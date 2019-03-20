import { User } from "../models/user";
import { ActionReducerMap } from "@ngrx/store";
import userReducer from "./reducers/user.reducer";
//moj deo//
import mymealReducer from "./reducers/mymeal.reducer";
import { Meal } from "../models/meal";
import recomendedmealsReducer from "./reducers/recomendedmeals.reducer";
import mysnacksReducer from "./reducers/mysnacks.reducer";
import { Snack } from "../models/snack";
import recomendedsnacksReducer from "./reducers/recomendedsnacks.reducer";
import selecteddateReducer from "./reducers/selecteddate.reducer";
import editmealReducer from "./reducers/editmeal.reducer";
import editsnackReducer from "./reducers/editsnack.reducer";
import allfoodReducer from "./reducers/allfood.reducer";
import { Food } from "../models/food";
import { Post } from "../models/post";
import foodschosenReducer from "./reducers/foodschosen.reducer";
import { Product } from "../models/product";
import productsReducer from "./reducers/products.reducer";
import productViewReducer from "./reducers/product-view.reducer";
import ForumReducer from "./reducers/forum.reducer";
import CategoryReducer from "./reducers/category.reducer";
import SelectedPostReducer from "./reducers/selectedPost.reducer";
//moj deo//
export interface State {
    user: User[];
    mymeals:Meal[],
    recomendedmeals:Meal[],
    mysnacks:Snack[],
    recomendedsnacks:Snack[],
    selecteddate:Number[],
    editmeal:Meal[],
    editsnack:Snack[],
    allfood:Food[],
    foodchosen:Food[],
    products: Product[],
    productView: Product[],
    posts:Post[];
    category:string[];
    selectedPost:Post[];
}

export const rootReducer: ActionReducerMap<any> = {
    user: userReducer,
    mymeals:mymealReducer,
    recomendedmeals:recomendedmealsReducer,
    mysnacks:mysnacksReducer,
    recomendedsnacks:recomendedsnacksReducer,
    selecteddate:selecteddateReducer,
    editmeal:editmealReducer,
    editsnack:editsnackReducer,
    allfood:allfoodReducer,
    foodchosen:foodschosenReducer,
    products: productsReducer,
    productView: productViewReducer,
    posts:ForumReducer,
    category:CategoryReducer,
    selectedPost:SelectedPostReducer,

};