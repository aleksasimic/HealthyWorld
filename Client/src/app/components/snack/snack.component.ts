import { Component, OnInit, Input } from '@angular/core';
import { Snack } from 'src/app/models/snack';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { User } from 'src/app/models/user';
import { Date } from 'src/app/models/date';
import { AddToMySnacks } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-snack',
  templateUrl: './snack.component.html',
  styleUrls: ['./snack.component.css']
})
export class SnackComponent implements OnInit {

  @Input() 
  public snack: Snack

  date$:Observable<Number[]>;
  date:Number[];
  user$: Observable<User[]>;
  user: User;
  constructor(private store$: Store<State>) {
    this.user$ = this.store$.select(state => state.user); 
    this.date$=this.store$.select(state=>state.selecteddate);
   }

  ngOnInit() {  
    this.date$.subscribe(date => {
    this.date=date;
  });
  this.user$.subscribe(users => {
    users.forEach( user => {
      if(user !== undefined && user !== null) {
        this.user = user;
      }
    });
  });
  }
  addtoMySnacks(name,type,kcals,protein,fat,img)
  {
    let snack=new Snack(name,type,null,kcals,protein,fat, null,null,new Date(this.date[0],this.date[1],this.date[2]),img);
    console.log("ADD TO MY SNACKS");
    this.store$.dispatch(new AddToMySnacks(snack,this.user,this.date));
  }
}
