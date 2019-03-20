import { Review } from "./review";
import { MyCurrency } from "./myCurrency";
import { User } from "./user";
import { UserForProduct } from "./userForProduct";

export class Product {
    public get dislikes(): number {
        return this.sumLikes;
    }
    public set dislikes(value: number) {
        this.sumLikes = value;
    }
    constructor(
        public pid:string,
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
        public sumLikes: number = 0,
        public tags: string[],
        public categorie: string,
        public reviews: Review[],
        public proteins: number = null,
        public fat: number = null,
        public carbohydrates: number = null,
        public kcals: number = null,
        public owner: String = null,
        public nP: number = 0,
        public ownerObj: UserForProduct = null,
        public nLikes: number = 0
    ) {}
}