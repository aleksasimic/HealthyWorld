import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Snack } from 'src/app/models/snack';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';

@Component({
  selector: 'app-snack-list-my',
  templateUrl: './snack-list-my.component.html',
  styleUrls: ['./snack-list-my.component.css']
})
export class SnackListMyComponent implements OnInit {

  mysnacks$:Observable<Snack[]>;
  constructor(private store$:Store<State>) { 
    this.mysnacks$=this.store$.select(state=>state.mysnacks);
  }

  ngOnInit() {
  }

}
