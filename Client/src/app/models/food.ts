export class Food {
    constructor(
        public name:string,
        public description:string,
        public price:number,
        public dailyrecomended:number,
        public protein: number,
        public fat: number,
        public kcals:number,
        public carbs:number=null,
        public latinName:String=null,
        public categorie: string = null ,// new
        public sum: number = 0, // new
        public nSum: number = 0, // new
        public img: string = ''
    ) {

    }
}