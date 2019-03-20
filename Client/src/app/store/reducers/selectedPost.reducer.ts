import{Post} from "../../models/post"
import { Action } from "@ngrx/store";
import { SELECT_POST,SelectPost,ADD_COMMENT_SUCCESS,AddCommentSuccess,ADD_LIKE_SUCCESS,AddLikeSuccess,ADD_DISLIKE_SUCCESS,AddDislikeSuccess} from "../actions/actions";

const initialState= [];

export default function (state:Post[] = initialState, action: Action) {
    switch (action.type) {
        
         case  SELECT_POST:{
             console.log(action.type);
             const selected = (action as SelectPost).post;
             console.log("Usao u selected post reducer!!!")
             console.log(selected);
             return [...state=[],selected];


        }
        case ADD_COMMENT_SUCCESS:{
            console.log(action.type);
            const newselected = (action as AddCommentSuccess).post;
            console.log("Usao u add commment success reducer!!!")
            console.log(newselected);
            return [...state=[],newselected];



        }
        case ADD_LIKE_SUCCESS:{
            console.log(action.type);
            const newselected = (action as AddLikeSuccess).post;
            console.log("Usao u add like success reducer!!!")
            console.log(newselected);
            return [...state=[],newselected];


        }
        case ADD_DISLIKE_SUCCESS:{
            console.log(action.type);
            const newselected = (action as AddDislikeSuccess).post;
            console.log("Usao u add dislike success reducer!!!")
            console.log(newselected);
            return [...state=[],newselected];

        }

        default: {
            return [...state]
        }
    }
}