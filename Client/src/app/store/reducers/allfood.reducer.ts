import { Food } from "src/app/models/food";
import { Action } from "@ngrx/store";
import { ALL_FOODS_ARRIVED, AllFoodsArrived, FOOD_SELECTED, FoodSelected, FOOD_UNSELECTED, FoodUnselected } from "../actions/actions";
const initialState:Food[]=[];
export default function (state:Food[]=initialState,action:Action){
    switch(action.type){
        case ALL_FOODS_ARRIVED:{
            const allfoods=(action as AllFoodsArrived).allfoods;
            return[...state=[],...allfoods];
        }
        case FOOD_SELECTED:{
            const food=(action as FoodSelected).food;
            return state.filter(x=>{return food.name!==x.name});
        }
        case FOOD_UNSELECTED:{
            const food=(action as FoodUnselected).food;
            return [...state,food];
        }
        default:{
            return[...state];
        }
    }
}