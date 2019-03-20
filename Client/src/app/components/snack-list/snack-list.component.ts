import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Snack } from 'src/app/models/snack';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';

@Component({
  selector: 'app-snack-list',
  templateUrl: './snack-list.component.html',
  styleUrls: ['./snack-list.component.css']
})
export class SnackListComponent implements OnInit {

  recomendedsnacks$:Observable<Snack[]>;
  constructor(private store$:Store<State>) { 
    this.recomendedsnacks$=this.store$.select(state=>state.recomendedsnacks);
  }

  ngOnInit() {
  }

}
