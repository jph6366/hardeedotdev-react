import type { DataSource } from "./DataSource";
import { PageAppItem, SPA, SinglePageApp } from "../../Domain/Model/SinglePageApp";
import { carouselList, pageContentString } from "../../Data/constants";
import { SPACarousel } from "../../Domain/Model/Carousel";

export class InMemoryDataSourceImpl implements DataSource {
  inMemorySPA: SinglePageApp;

  constructor() {
    const carouselContent: SPACarousel = new SPACarousel(carouselList);
    this.inMemorySPA = new SPA('', carouselContent, pageContentString, 0);
  }
    async setSPA(spa: PageAppItem): Promise<void> {
        this.inMemorySPA = spa;
    }
    async getSPA(): Promise<PageAppItem> {
        return this.inMemorySPA;
    }
}
