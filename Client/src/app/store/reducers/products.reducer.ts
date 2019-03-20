import { User } from "src/app/models/user";
import { Action } from "@ngrx/store";
import { Product } from "src/app/models/product";
import { ADD_PRODUCT, AddProduct, GET_ALL_PRODUCTS, GetAllProductsSuccess, GET_ALL_PRODUCTS_SUCCESS, VIEW_PRODUCT, ViewProduct, ADD_REVIEW_PRODUCT, AddReviewProduct, FIND_PRODUCT_SUCCESS, FindProductSuccess, UPDATE_PRODUCT, UpdateProduct, SORT_PRODUCTS, SortProducts, DELETE_PRODUCT, DeleteProduct, UPDATE_PRODUCT_SUCCESS, ADD_PRODUCT_SUCCESS, AddProductSuccess, UpdateProductSuccess, DELETE_PRODUCT_SUCCESS, DeleteProductSuccess } from "../actions/actions";

const initialState: Product[] = [];

export default function(state: Product[] = initialState, action: Action) {
    switch(action.type) {
        case DELETE_PRODUCT_SUCCESS: {
            // console.log(DELETE_PRODUCT_SUCCESS);
            const product = (action as DeleteProductSuccess).product;

            return state.filter(p => p.pid !== product.pid);
        }
        case SORT_PRODUCTS: {
            // console.log(SORT_PRODUCTS);
            const property = (action as SortProducts).property;
            const ascBool = (action as SortProducts).ascendingBool;

            state.sort( (a,b) => {
                let propertyA = a[property];
                let propertyB = b[property];
                if(ascBool) { // rastuce    
                    if (propertyA < propertyB)
                    return -1;
                 if (propertyA > propertyB)
                    return 1;
                } else { // opadajuce
                    if (propertyA > propertyB)
                        return -1;
                     if (propertyA < propertyB)
                        return 1;
                }
                return 0;
            });

            return [...state];

        }
        case UPDATE_PRODUCT_SUCCESS: {
            // console.log(UPDATE_PRODUCT_SUCCESS);
            const product = (action as UpdateProductSuccess).product;

            return state.map(p => {
                if(p.pid === product.pid)
                    return product;
                else
                    return p;
            });
        }
        case FIND_PRODUCT_SUCCESS: {
            // console.log(FIND_PRODUCT_SUCCESS);
            const products = (action as FindProductSuccess).productList;

            return [...products];
        }
        case ADD_REVIEW_PRODUCT: {
            console.log(ADD_REVIEW_PRODUCT);
            const product = (action as AddReviewProduct).product;
            state = state.map( p => {
                if(p.pid === product.pid)
                    return product;
                else 
                    return p;
            });
            return [...state]; // mozda moze i samo state :D 
        }
        case GET_ALL_PRODUCTS_SUCCESS: {
            // console.log(action.type);
            const products = (action as GetAllProductsSuccess).allProducts;
            
            return [...products];
        }
        case ADD_PRODUCT_SUCCESS: {
            console.log(action.type);
            const product = (action as AddProductSuccess).product;
            return [product, ...state];
        }
        default:{
            // console.log("DEFAULT");
            return [...state];
        }
    }
}
