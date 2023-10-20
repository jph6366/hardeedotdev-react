import { ReactNode } from "react";

export interface CarouselItem {
    content: string | HTMLElement | ReactNode;
    title: string;
    image: string;
};

export interface InteractableCarouselItem extends CarouselItem {
    projection: number
    range: number
};

export class CreateCarouselItem implements CarouselItem, InteractableCarouselItem{
    content: string | HTMLElement | ReactNode;
    title: string;
    image: string;
    constructor(content: string | HTMLElement | ReactNode, title: string, image: string) {
        this.content = content;
        this.title = title;
        this.image = image;
    }
    projection: number;
    range: number;
}

export interface Carousel{
    itemList: CarouselItem[];
};

export class SPACarousel implements Carousel{
    itemList: CarouselItem[];
    constructor(itemList: CarouselItem[]) {
        this.itemList = itemList;
    }
}