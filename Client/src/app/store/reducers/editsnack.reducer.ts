import { Snack } from "src/app/models/snack";
import { Action } from "@ngrx/store";
import { EditSnackSelected, EDIT_SNACK_SELECTED } from "../actions/actions";

const initialState:Snack[]=[];
export default function (state:Snack[]=initialState,action:Action){
    switch(action.type){
        case EDIT_SNACK_SELECTED:{
            const snack=(action as EditSnackSelected).snack;
            return[...state=[],snack];
        }
        default:{
            return[...state];
        }
    }
}