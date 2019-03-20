import { Product } from "./product";

export class User {
    public get dislikes(): number {
        return this.sumLikes;
    }
    public set dislikes(value: number) {
        this.sumLikes = value;
    }
    constructor(
        public username: string,
        public surname: string,
        public name: string,
        public password: string,
        public email: string,
        public phoneNumber: string,
        public date: Date = null,
        public likes: number = 0,
        public sumLikes: number = 0,
        public products: Product[] = [],
        public nP: number = 0,
        public favoriteProducts: Product[] = [],
        public nLikes: number = 0,
        public img: string = ''
    ) {}
}
