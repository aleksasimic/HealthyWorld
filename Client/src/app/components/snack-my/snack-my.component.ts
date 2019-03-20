import { Component, OnInit, Input } from '@angular/core';
import { Snack } from 'src/app/models/snack';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { DeleteMySnack, EditSnackSelected } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-snack-my',
  templateUrl: './snack-my.component.html',
  styleUrls: ['./snack-my.component.css']
})
export class SnackMyComponent implements OnInit {

  @Input() 
  snack:Snack;
  
  user: User;
  user$: Observable<User[]>;
  date:Number[];
  date$:Observable<Number[]>;
  constructor(private store$: Store<State>) { 
    this.user$ = this.store$.select(state => state.user);
    this.date$=this.store$.select(state=>state.selecteddate);
  }

  ngOnInit() {
    this.user$.subscribe(users => {
      users.forEach( user => {
        if(user !== undefined && user !== null) {
          this.user = user;
        }
      });
    });
    this.date$.subscribe(date => {
      this.date=date;
    });
  }
  editSnack(snack:Snack){
    console.log("U EDIT SNACK SAM");
    this.store$.dispatch(new EditSnackSelected(snack));
  }
  deleteSnack(name,date)
  {
    console.log(name);
    console.log(date);
    let niz:Number[]=[];
    niz.push(date.year);
    niz.push(date.month);
    niz.push(date.day);
    this.store$.dispatch(new DeleteMySnack(this.user,name,niz));
  }
}
