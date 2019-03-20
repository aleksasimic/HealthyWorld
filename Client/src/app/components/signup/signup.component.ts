import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/models/user';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { SingUpUnsuccessful, SignUp } from 'src/app/store/actions/actions';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  username: string;
  user: User;
  // user$: Observable<User[]>;

  passwd2: string;

  constructor(
    private store$: Store<State>
  ) {
    // this.user$ = this.store$.select(state => state.user);
  }

  ngOnInit() {
    this.user = new User('', '', '', '', '','');
    this.passwd2 = '';
  }

  signUp() {
    console.log('signUp()');
    if (this.user.username !== ''
      && this.user.email !== ''
      && this.user.name !== ''
      && this.user.surname !== ''
      && this.user.phoneNumber !== ''
      && this.user.password !== ''
      && this.passwd2 !== ''
    ) {
      if(this.user.password !== this.passwd2) {
        this.store$.dispatch(new SingUpUnsuccessful('PASSWORDS DO NOT MATCH!'));
      } else {
        this.user.date = new Date();
        this.user.username = this.user.username.split(' ').join('');
        this.store$.dispatch(new SignUp(this.user));
      }    
    } else {
      this.store$.dispatch(new SingUpUnsuccessful('ALL FIELDS MUST HAVE VALUE!'));
    }
    
  }

}
