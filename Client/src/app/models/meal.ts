import { Food } from "./food";
import { Date } from "./date";
import { Time } from "./time";
export class Meal {
    constructor(
        public ingridients: Food[],
        public name:String,
        public type:String,
        public description:String,
        public addedby:String,
        public recipe:String,
        public date:Date,
        public time:Time,
        public kcals:Number,
        public protein:Number,
        public fat:Number,
        public img:String,

    ) {

    }
}