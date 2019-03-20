import { Snack } from "src/app/models/snack";
import { Action } from "@ngrx/store";
import { ADD_SNACK_ONE, ADD_SNACK_TWO, UPDATE_SNACK_ONE, UPDATE_SNACK_TWO, DELETE_SNACK_ONE, DELETE_SNACK_TWO, MY_SNACKS_ARRIVED, MySnacksArrived, SNACKS_OVERLOAD} from "../actions/actions";

const initialState:Snack[]=[];

export default function (state:Snack[]=initialState,action:Action){
    switch(action.type){
        case MY_SNACKS_ARRIVED:{
            const newsnacks=(action as MySnacksArrived).mysnacks;
            return [...state=[],...newsnacks];
        }
        case SNACKS_OVERLOAD:{
            console.log("U SNACKS OVERLOAD SAM");
            return[...state];
        }
        case ADD_SNACK_ONE:{

        }
        case ADD_SNACK_TWO:{

        }
        case UPDATE_SNACK_ONE:{

        }
        case UPDATE_SNACK_TWO:{

        }
        case DELETE_SNACK_ONE:{

        }
        case DELETE_SNACK_TWO:{

        }
        default:{
            return [...state]
        }
    }
}