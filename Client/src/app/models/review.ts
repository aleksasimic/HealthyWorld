export class Review {
    constructor(
        public poroductID: string,
        public id: string,
        public username: string,
        public review: string,
        public date = null
    ) {}
}