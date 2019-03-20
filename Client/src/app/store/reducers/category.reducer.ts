import { Action } from "@ngrx/store";
import { ACTIVE_CATEGORY,ActiveCategory} from "../actions/actions";

const initialState= [];

export default function (state:string[] = initialState, action: Action) {
    switch (action.type) {
        
         case  ACTIVE_CATEGORY:{
             console.log("active category reducer!")
             console.log(action.type);
             const category = (action as ActiveCategory).category;
             console.log(category);
             return [...state=[],category];


        }
        default: {
            return [...state]
        }
    }
}