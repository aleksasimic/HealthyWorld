import { Review } from "./review";
import { MyCurrency } from "./myCurrency";

export class Product {
    constructor(
        public id:string,
        public name:string,
        public latinName:string,
        public price: number,
        public currency: MyCurrency,
        public description:string,
        public img: string,
        public place: string,
        public views: number,
        public date: Date,
        public likes: number,
        public dislikes: number,
        public tags: string[],
        public categorie: string,
        public reviews: Review[],
        public proteins: number = null,
        public fat: number = null,
        public carbohydrates: number = null,
        public owner: string = null
    ) {}
}