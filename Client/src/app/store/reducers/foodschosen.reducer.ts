import { Food } from "src/app/models/food";
import { Action } from "@ngrx/store";
import { ALL_FOODS_ARRIVED, AllFoodsArrived, FOOD_SELECTED, FoodSelected, FOOD_UNSELECTED } from "../actions/actions";
const initialState:Food[]=[];
export default function (state:Food[]=initialState,action:Action){
    switch(action.type){
       case FOOD_SELECTED:{
           console.log(" u potrebnom reduceru");
            const food=(action as FoodSelected).food;
            return [...state,food];
        }
        case FOOD_UNSELECTED:{
            const food=(action as FoodSelected).food;
            return state.filter(x=>{return food.name!==x.name});
        }
        default:{
            return[...state];
        }
    }
}