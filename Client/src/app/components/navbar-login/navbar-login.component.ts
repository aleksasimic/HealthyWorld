import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { LogIn, LogInSuccess, SingUpUnsuccessful } from 'src/app/store/actions/actions';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-navbar-login',
  templateUrl: './navbar-login.component.html',
  styleUrls: ['./navbar-login.component.css']
})
export class NavbarLoginComponent implements OnInit {

  username: string;
  password: string;
  error: string;

  constructor(
    private store$: Store<State>
  ) {
    this.username = this.password = this.error = '';
   }

  ngOnInit() {
  }
  login() {
    console.log('login()');
    if(this.username !== '' && this.password !== '') {
      this.username = this.username.split(' ').join('');
      this.store$.dispatch(new LogIn(new User(this.username,'','',this.password,'','')));
    } else {
      this.store$.dispatch(new SingUpUnsuccessful('ALL FIELDS MUST HAVE VALUE!'));
    }
  }

}
