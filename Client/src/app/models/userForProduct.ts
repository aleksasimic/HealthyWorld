import { Product } from "./product";

export class UserForProduct {
    constructor(
        public username: string,
        public surname: string,
        public name: string,
        public email: string,
        public phoneNumber: string,
        public date: Date = null,
        public likes: number = 0,
        public sumLikes: number = 0,
        public nLikes: number = 0

    ) {}
}
