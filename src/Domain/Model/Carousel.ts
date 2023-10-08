
export interface CarouselItem {
    content: string | HTMLElement | Node;
    title: string;
    image: string;
};

export class CreateCarouselItem implements CarouselItem{
    content: string | HTMLElement | Node;
    title: string;
    image: string;
    constructor(content: string | HTMLElement | Node, title: string, image: string) {
        this.content = content;
        this.title = title;
        this.image = image;
    }
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