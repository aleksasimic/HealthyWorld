import{Post} from "../../models/post"
import { Action } from "@ngrx/store";
import { FIND_CATEGORIES,FindCategories,FIND_CATEGORIES_SUCCESS,FindCategoriesSuccess,ADD_POST_SUCCESS, AddPostSuccess} from "../actions/actions";

const initialState= [];

export default function (state:Post[] = initialState, action: Action) {
    switch (action.type) {
        
         case  FIND_CATEGORIES_SUCCESS:{
             console.log(action.type);
             const posts = (action as FindCategoriesSuccess).posts;
             console.log(posts);
             return [...state=[],...posts];


        }
        case ADD_POST_SUCCESS:{
            console.log(action.type);
            const posts = (action as AddPostSuccess).post;
            console.log(posts);
            return [...state=[],...posts];


        }
        default: {
            return [...state]
        }
    }
}