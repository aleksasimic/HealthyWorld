import { Snack } from "src/app/models/snack";
import { Action } from "@ngrx/store";
import { RECOMMEND_SNACKS, RECOMMEND_SNACKS_ARRIVED, RecommendSnacksArrived } from "../actions/actions";

const initialState:Snack[]=[];

export default function (state:Snack[]=initialState,action:Action){
    switch(action.type){
        case RECOMMEND_SNACKS_ARRIVED:{
            console.log("U REDUCERU RECOMMEND_SNACKS_ARRIVED");
            let snacks=(action as RecommendSnacksArrived).snacks;
            return [...state=[],...snacks];
        }
        default:{
            return [...state];
        }
    }
}