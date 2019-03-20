import { User } from "src/app/models/user";
import { Action } from "@ngrx/store";
import { SIGN_UP, SignUp, LOG_IN_SUCCESS, LogInSuccess, LOG_OUT, LOG_IN, SIGN_UP_UNSUCCESSFUL, SingUpUnsuccessful, ADD_PRODUCT, AddProduct, UPDATE_PRODUCT, UpdateProduct, DELETE_PRODUCT, DeleteProduct, UPDATE_USER_SUCCESS, UpdateUser, DELETE_PRODUCT_SUCCESS, UPDATE_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS } from "../actions/actions";

const inititalUser = new User('', '', '', '', '','');
const radiUser = new User('RADI', 'RADI', 'RADI', 'RADI', 'RADI','RADI');
let errorUser = new User('error','error','error','error','error','error');
const initialState: User[] = [inititalUser];

export default function(state: User[] = initialState, action: Action) {
    switch(action.type) {
        case UPDATE_USER_SUCCESS: {
            // console.log(UPDATE_USER_SUCCESS);
            const user = (action as UpdateUser).user;
            if(user.username === 'error')
                return state; // nepromenjen state
            else{
                return [user]; // novi state sa tim userom
            }
        }
        case DELETE_PRODUCT_SUCCESS: {
            // console.log(DELETE_PRODUCT_SUCCESS);
            const product = (action as DeleteProduct).product;

            let user = state[0];
            user.products = user.products.filter(p => p.pid !== product.pid);

            return [...state=[],user];
        }
        case UPDATE_PRODUCT_SUCCESS: {
            // console.log(UPDATE_PRODUCT_SUCCESS);
            const product = (action as UpdateProduct).product;
            let user = state[0];
            user.products = user.products.map(p => {
                if(p.pid === product.pid)
                    return product;
                else
                    return p;
            });
            return [...state = [], user];
        }
        case ADD_PRODUCT_SUCCESS: {
            // console.log(action.type);
            const product = (action as AddProduct).product;
            state[0].products = [product, ...state[0].products];
            state[0].nP = product.nP;
            // console.log(state);
            return [...state];
        }
        case SIGN_UP_UNSUCCESSFUL: {
            // console.log(action.type);
            errorUser.surname = (action as SingUpUnsuccessful).error;

            return [...state = [], errorUser];
        }
        case LOG_IN_SUCCESS: {
            // console.log(action.type);
            const user = (action as LogInSuccess).user;
            const success = (action as LogInSuccess).success;

            return [...state = [], user];
        }
        case LOG_OUT:{
            return [...state=[]];
        }
        default:{
            // console.log("DEFAULT");
            return [...state];
        }
    }
}
