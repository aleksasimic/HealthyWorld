import { Meal } from "src/app/models/meal";
import { Action } from "@ngrx/store";
import { EDIT_MEAL_SELECTED, EditMealSelected } from "../actions/actions";
const initialState:Meal[]=[];
export default function (state:Meal[]=initialState,action:Action){
    switch(action.type){
        case EDIT_MEAL_SELECTED:{
            const meal=(action as EditMealSelected).meal;
            console.log("U EDIT MEAL REDUCERU SAM");
            return [...state=[],meal];
        }
        default:{
            return[...state];
        }
    }
}