import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Snack } from 'src/app/models/snack';
import { Meal } from 'src/app/models/meal';
import { Store } from '@ngrx/store';
import { State } from 'src/app/store/store';

@Component({
  selector: 'app-daily-plan-rightside',
  templateUrl: './daily-plan-rightside.component.html',
  styleUrls: ['./daily-plan-rightside.component.css']
})
export class DailyPlanRightsideComponent implements OnInit {
  constructor() {
   }

  ngOnInit() {

  }

}
