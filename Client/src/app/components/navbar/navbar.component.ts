import { Component, OnInit } from '@angular/core';
import { State } from 'src/app/store/store';
import { Store } from '@ngrx/store';
import { GetAllProducts } from 'src/app/store/actions/actions';
import { User } from 'src/app/models/user';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  user: User;
  user$: Observable<User[]>;

  constructor(
    private store$: Store<State>
  ) {
    this.user$ = this.store$.select(state => state.user);
    this.user = new User('error', 'error', 'error', 'error', 'error','error');
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
  goToMarket() {
    this.store$.dispatch(new GetAllProducts());
  }

}
