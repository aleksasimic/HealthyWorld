import { Meal } from "src/app/models/meal";
import { Action } from "@ngrx/store";
import { ADD_BREAKFAST, ADD_LUNCH, ADD_DINNER, UPDATE_BREAKFAST, UPDATE_LUNCH, UPDATE_DINNER, DELETE_BREAKFAST, DELETE_LUNCH, DELETE_DINNER, MY_MEALS_ARRIVED, MyMealsArrived, MEALS_OVERLOAD } from "../actions/actions";

const initialState:Meal[]=[];

export default function (state:Meal[]=initialState,action:Action){
    switch(action.type){
        case MY_MEALS_ARRIVED:{
            const newmeals=(action as MyMealsArrived).mymeals;
            console.log("MY MEALS ARRIVED REDUCER");
            return [...state=[],...newmeals];
        }
        case MEALS_OVERLOAD:{
            return[...state];
        }
        case ADD_BREAKFAST:{

        }
        case ADD_LUNCH:{

        }
        case ADD_DINNER:{

        }
        case UPDATE_BREAKFAST:{

        }
        case UPDATE_LUNCH:{

        }
        case UPDATE_DINNER:{

        }
        case DELETE_BREAKFAST:{

        }
        case DELETE_LUNCH:{

        }
        case DELETE_DINNER:{

        }
        default:{
            return [...state];
        }
    }
}
