import { Food } from "./food";
import {Snack} from "./snack";
import { Meal } from "./meal";
export class DailyPlan {
    constructor(
        public breakfast:Meal,
        public lunch:Meal,
        public dinner:Meal,
        public snacks:Snack[],
        public totalkcals:number,
        public totalproteins:number,
        public totalfat:number
    ) {

    }
}