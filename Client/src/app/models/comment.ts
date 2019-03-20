import { DatePipe } from '@angular/common';

export class Comment {
    constructor(
        public username: string,
        public comment: string,
        public likes: number,
        public dislikes: number,
        public date: Date = null,
        public img:string,
    ) {}
}