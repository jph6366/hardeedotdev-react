
import { Carousel } from "./Carousel";

export interface PageAppItem {
    title: string;
    carousel: Carousel;
    content: string | HTMLElement;
    contentIndex: number;
};

export type SinglePageApp = PageAppItem;

export class SPA implements SinglePageApp{
    title: string;
    carousel: Carousel;
    content: string | HTMLElement;
    contentIndex: number;
    constructor(
        title: string, carousel: Carousel, 
        content: string | HTMLElement, contentIndex: number) {
        this.title = title;
        this.carousel = carousel;
        this.content = content;
        this.contentIndex = contentIndex;
    }
}