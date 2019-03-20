import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { GetAllProducts } from 'src/app/store/actions/actions';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';

@Component({
  selector: 'app-view-market',
  templateUrl: './view-market.component.html',
  styleUrls: ['./view-market.component.css']
})
export class ViewMarketComponent implements OnInit {

  user$: Observable<User[]>;
  user: User;

  constructor(
    private store$: Store<State>
  ) {
    // this.store$.dispatch(new GetAllProducts());
    this.user$ = this.store$.select(state => state.user);
    this.user = null;
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

}
