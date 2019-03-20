import { Food } from "./food";
import { Time } from "./time";
import { Date } from "./date";

export class Snack {
    constructor(
        public name:String,
        public type:String,
        public food:Food,
        public kcals:Number,
        public protein:Number,
        public fat:Number,
        public addedby:String,
        public time:Time,
        public date:Date,
        public img:String
    ) {

    }
}