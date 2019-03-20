import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/models/user';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';

@Component({
  selector: 'app-view-profile',
  templateUrl: './view-profile.component.html',
  styleUrls: ['./view-profile.component.css']
})
export class ViewProfileComponent implements OnInit {

  user: User;
  user$: Observable<User[]>;
  date: Date;

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
          if(this.user.date !== null) {
            this.date = new Date(this.user.date);
          }
        }
      });
    });
  }

}
