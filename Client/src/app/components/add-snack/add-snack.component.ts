import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { AddSnack } from 'src/app/store/actions/actions';
import { Snack } from 'src/app/models/snack';
import { Food } from 'src/app/models/food';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-add-snack',
  templateUrl: './add-snack.component.html',
  styleUrls: ['./add-snack.component.css']
})
export class AddSnackComponent implements OnInit {


  @Input()
  snacktype:String;
  @Input()
  snackname:String;
  @Input()
  snackcals:Number;
  @Input()
  snackprotein:Number;
  @Input()
  snackfat:Number;
  @Input()
  snackimg:String;


  user: User;
  user$: Observable<User[]>;

  constructor(private store$:Store<State>) { 
    this.user$ = this.store$.select(state => state.user); 
  }

  ngOnInit() {
    this.user$.subscribe(users => {
      users.forEach( user => {
        if(user !== undefined && user !== null) {
          this.user = user;
        }
      });
    });
  }
  submit()
  {
    console.log("U SUBMITU SAM");
    console.log(this.snacktype);
    console.log(this.snackname);
    console.log(this.snackcals);
    console.log(this.snackprotein);
    console.log(this.snackfat);
    this.store$.dispatch(new AddSnack(new Snack(this.snackname,this.snacktype,new Food('Hrana','Opis',30,10,10,5,5),1,2,3,this.user.username,null,null,this.snackimg)));
  }
}
