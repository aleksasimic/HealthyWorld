import { Component, OnInit, Input } from '@angular/core';
import { Snack } from 'src/app/models/snack';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { EditSnackSubmited } from 'src/app/store/actions/actions';

@Component({
  selector: 'app-edit-snack',
  templateUrl: './edit-snack.component.html',
  styleUrls: ['./edit-snack.component.css']
})
export class EditSnackComponent implements OnInit {

  @Input() 
  public snack: Snack
  user: User;
  user$: Observable<User[]>;
  date:Number[];
  date$:Observable<Number[]>;

  constructor(private store$:Store<State>) { 
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
  submit(snack:Snack){
    console.log(this.user);
    console.log(snack);
    console.log(this.date);
    this.store$.dispatch(new EditSnackSubmited(this.user,snack,this.date));
  }
}
