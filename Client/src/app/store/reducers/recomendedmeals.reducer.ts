import { Meal } from "src/app/models/meal";
import { Action } from "@ngrx/store";
import { RECOMMEND_MEALS, RECOMMEND_MEALS_ARRIVED, RecommendMealsArrived } from "../actions/actions";

const initialState:Meal[]=[];

export default function (state:Meal[]=initialState,action:Action){
    switch(action.type){
        case RECOMMEND_MEALS_ARRIVED:{
            console.log("U REDUCERU SAM");
            let meals=(action as RecommendMealsArrived).meals;
            return [...state=[],...meals];
        }
        default:{
            return [...state];
        }
    }

}