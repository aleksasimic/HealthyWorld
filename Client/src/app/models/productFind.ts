import { MyCurrency } from "./myCurrency";

export class ProductFind {
    constructor(
        public name: string = null,
        public tags: string[],      
        public selectedCat: string,
        public selectedCurrency: MyCurrency,
        public minPrice: number = null,
        public maxPrice: number = null,
        public minProteins: number = null,
        public maxProteins: number = null,
        public minCarb: number = null,
        public maxCarb: number = null,
        public minKCals: number = null,
        public maxKCals: number = null,
        public minFat: number = null,
        public maxFat: number = null,
    ) {}
}