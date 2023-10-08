
/**
 * Repository managing Carousel Content
 */

import { CarouselItem } from "../Model/Carousel";

export interface CarouselRepository {
    setItems(items: CarouselItem[]): Promise<CarouselItem[]>;
    getItems(): Promise<CarouselItem[]>;
    getItemContent(title: string): Promise<string>;
  }