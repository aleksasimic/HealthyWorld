import { User } from "src/app/models/user";
import { Action } from "@ngrx/store";
import { Product } from "src/app/models/product";
import { ADD_PRODUCT, AddProduct, GET_ALL_PRODUCTS, GetAllProductsSuccess, GET_ALL_PRODUCTS_SUCCESS, VIEW_PRODUCT, ViewProduct, ADD_REVIEW_PRODUCT, AddReviewProduct, FIND_PRODUCT_SUCCESS, FindProductSuccess } from "../actions/actions";

const initialState: Product[] = [];

export default function(state: Product[] = initialState, action: Action) {
    switch(action.type) {
        case ADD_REVIEW_PRODUCT: {
            // console.log(ADD_REVIEW_PRODUCT);
            const product = (action as AddReviewProduct).product;

            return [...state = [], product];
        }
        case VIEW_PRODUCT: { // mozda bi ovo trebalo da se prebaci u novi reducer
            // console.log(VIEW_PRODUCT);
            const product = (action as ViewProduct).product;

            return [...state = [], product];
        }
        default:{
            // console.log("DEFAULT");
            return [...state];
        }
    }
}
