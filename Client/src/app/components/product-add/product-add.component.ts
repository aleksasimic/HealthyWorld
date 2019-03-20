import { Component, OnInit } from '@angular/core';
import * as currenciesLists from "./../../const-lists/currencies";
import { CATEGORIES_LIST } from "../../const-lists/categories";
import { MyCurrency } from 'src/app/models/myCurrency';
import { Product } from 'src/app/models/product';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { AddProduct, AddFood } from 'src/app/store/actions/actions';
import { Food } from 'src/app/models/food';
import { UserForProduct } from 'src/app/models/userForProduct';
import { MongodbService } from 'src/app/services/mongodb.service';

const image = 'image/';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {

  user$: Observable<User[]>;
  user: User;

  product: Product;

  currencies: MyCurrency[];
  categories: string[];
  tag: string;

  error: string;
  success: string;

  selectedFile: any = null;

  pSrc: string = image;

  constructor(
    private store$: Store<State>,
    private mongodb: MongodbService
  ) {
    this.currencies = currenciesLists.myCurrencies.filter((x,i) => i !== 0);
    this.categories = CATEGORIES_LIST.filter((x,i) => i !== 0);

    this.product = new Product('','','',null,this.currencies[0],'','','',0,null,0,0,[],this.categories[0],[]);
    this.tag = ''; 
    this.user$ = this.store$.select(state => state.user);
  }

  ngOnInit() {
    this.user$.subscribe(users => {
      users.forEach(user => {
        if(user !== undefined && user !== null) {
          this.user = user;
        }
      });
    });
  }
  onFileSelect(event) {
    console.log('onFileSelect(event)');
    console.log(event.target.files[0]);
    this.selectedFile = event.target.files[0];
  }
  onUpload() {
    // console.log('onUpload()');
    // console.log(this.selectedFile);
    // this.store$.dispatch(new UploadImage(this.selectedFile));
  }

  addProduct() {
    console.log('addProduct()');
    this.error = undefined;
    this.success = undefined;
    if(this.product.name !== '' &&
      this.product.price !== null &&
      this.product.description !== '' &&
      this.product.place !== ''
    ) {
      this.product.name = this.product.name.toUpperCase();
      this.product.place = this.product.place.toUpperCase();
      this.product.latinName = this.product.latinName.toUpperCase();

      this.success = "PRODUCT SUCCESSFULY ADDED!";
      // this.product.pid = this.user.username + (new Date()).getTime();
      this.product.pid = `${this.user.username}-${++this.user.nP}`;
      this.product.nP = this.user.nP;
      // za sad nema sliku....
      this.product.date = new Date();
      this.product.proteins = this.product.proteins === null ? 0 : this.product.proteins;
      this.product.carbohydrates = this.product.carbohydrates === null ? 0 : this.product.carbohydrates;
      this.product.fat = this.product.fat === null ? 0 : this.product.fat;
      this.product.kcals = this.product.kcals === null ? 0 : this.product.kcals;
      this.product.owner = this.user.username;
      let userFP = new UserForProduct(this.user.username,this.user.surname,this.user.name,this.user.email,this.user.phoneNumber,this.user.date,this.user.likes,this.user.dislikes);

      this.product.ownerObj = userFP;
      this.store$.dispatch(new AddProduct(this.product));
      const food = new Food(
        this.product.name,
        this.product.description, 
        this.product.price,
        0, // recomended
        this.product.proteins,
        this.product.fat,
        this.product.kcals,
        this.product.carbohydrates,
        this.product.latinName,
        this.product.categorie,
        0,
        0,
        this.product.img);
        
        this.mongodb.postObjectNoResp(food,'/food/add');
    } else {
      this.error = "NAME, PLACE, PRICE AND DESCRIPTION MUST HAVE VALUE!";
    }
  }
  selectCurrency(currency: MyCurrency) {
    this.product.currency = currency;
  }
  addTag() {
    if(this.tag !== '') {
      this.product.tags.push(this.tag.toUpperCase());
    }
    this.tag = '';
  }
  addCat(cat: string) {
    this.product.categorie = cat;
    console.log(this.product.categorie);
  }
}
