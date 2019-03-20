import { Injectable } from "@angular/core";
import { switchMap, map } from 'rxjs/operators';
import { Effect, Actions } from '@ngrx/effects';

import * as myActions from '../actions/actions';
import { async } from "@angular/core/testing";
import { from, Observable } from "rxjs";
import { User } from "src/app/models/user";
import { MongodbService } from "src/app/services/mongodb.service";
import { UpdateCallback } from "@angular/core/src/testability/testability";
import { Product } from "src/app/models/product";

@Injectable()
export class ProductsEffects {
    constructor(
        private actions$: Actions,
        private mongodb: MongodbService
    ) {}
    @Effect() 
    deleteProduct$ = this.actions$.ofType(myActions.DELETE_PRODUCT)
    .pipe(
        switchMap((action) => {
            const product = (action as myActions.DeleteProduct).product;
            return from(this.mongodb.postObject(product,'/product/delete'))
            .pipe(
                map( deletedObj => {
                    return new myActions.DeleteProductSuccess(deletedObj);
                })
            );
        })
    );

    @Effect() 
    findProduct$ = this.actions$.ofType(myActions.FIND_PRODUCT)
    .pipe(
        switchMap((action) => {
            let productFind = (action as myActions.FindProduct).productFind;
            return from(this.mongodb.postObject(productFind,'/product/find')) // vraca promise
            .pipe(
                map( findedProducts => {
                    return new myActions.FindProductSuccess(findedProducts);
                })
            );
        })
    );
    @Effect() 
    updateProduct$ = this.actions$.ofType(myActions.UPDATE_PRODUCT)
    .pipe(
        switchMap((action) => {
            let p = (action as myActions.UpdateProduct).product;
            const product = new Product(
                p.pid,
                p.name,
                p.latinName,
                p.price,
                p.currency,
                p.description,
                p.img,
                p.place,
                p.views,
                p.date,
                p.likes,
                p.sumLikes,
                p.tags,
                p.categorie,
                p.reviews,
                p.proteins,
                p.fat,
                p.carbohydrates,
                p.kcals,
                p.owner,
                p.nP,
                p.ownerObj,
                p.nLikes);

            return from(this.mongodb.postObject(product,'/product/update')) // vraca promise
            .pipe(
                map( updatedProduc => {
                    return new myActions.UpdateProductSuccess(updatedProduc);
                })
            );
        })
    );

    @Effect() 
    getAllProducts$ = this.actions$.ofType(myActions.GET_ALL_PRODUCTS)
    .pipe(
        switchMap((action) => {
            return from(this.mongodb.get('/product/all')) // vraca promise
            .pipe(
                map( allProducts => {
                    return new myActions.GetAllProductsSuccess(allProducts);
                })
            );
        })
    );
    @Effect() 
    addProduct$ = this.actions$.ofType(myActions.ADD_PRODUCT)
    .pipe(
        switchMap((action) => {
            const product = (action as myActions.AddProduct).product;
            return from(this.mongodb.postObject(product,'/product/add'))
            .pipe(
                map(addedProduct => {
                    return new myActions.AddProductSuccess(addedProduct);
                })
            );
        })
    );

}