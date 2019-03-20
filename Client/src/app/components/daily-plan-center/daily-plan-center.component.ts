import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';
import { Observable } from 'rxjs';
import { Meal } from 'src/app/models/meal';
import { Snack } from 'src/app/models/snack';

@Component({
  selector: 'app-daily-plan-center',
  templateUrl: './daily-plan-center.component.html',
  styleUrls: ['./daily-plan-center.component.css']
})
export class DailyPlanCenterComponent implements OnInit {

  editmeal$:Observable<Meal[]>
  editsnack$:Observable<Snack[]>
  constructor(private store$:Store<State>) {
    this.editmeal$=this.store$.select(state=>state.editmeal);
    this.editsnack$=this.store$.select(state=>state.editsnack);
   }

  ngOnInit() {
  }

}
