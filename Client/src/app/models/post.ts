import {Comment}from './comment';
import { DatePipe } from '@angular/common';

export class Post {
    constructor(
    
        public category:string,
        public username: string,
        public tittle:string,
        public text:string,
        public date: Date = null,
        public comments:Comment[],
        public img:string,
    ) {}
}