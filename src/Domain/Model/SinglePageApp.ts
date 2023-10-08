
import { Carousel } from "./Carousel";

export interface PageAppItem {
    title: string;
    carousel: Carousel;
    content: string | HTMLElement;
};

export type SinglePageApp = PageAppItem;

export class SPA implements SinglePageApp{
    title: string;
    carousel: Carousel;
    content: string | HTMLElement;
    constructor(title: string, carousel: Carousel, content: string | HTMLElement) {
        this.title = title;
        this.carousel = carousel;
        this.content = content;
    }
}