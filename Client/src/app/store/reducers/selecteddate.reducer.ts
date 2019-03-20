import { Action } from "@ngrx/store";
import { DATE_CHOSEN, DateChosen } from "../actions/actions";

const initialState:Number[]=[];
export default function (state:Number[]=initialState,action:Action){
    switch(action.type){
        case DATE_CHOSEN:{
            const newdate=(action as DateChosen).date;
            console.log("U REDUCERU SAM");
            console.log(...state=[],...newdate);
            return[...state=[],...newdate];
        }
        default:{
            return [...state];
        }
    }
}
