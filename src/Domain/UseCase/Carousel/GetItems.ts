import { CarouselItem } from "../../Model/Carousel";
import { CarouselRepository } from "../../Repository/CarouselRepository";

export interface GetItemsUseCase {
    invoke: () => Promise<CarouselItem[]>;
};

export class GetItems implements GetItemsUseCase {
    private carouselRepo: CarouselRepository;
    constructor(_carouselRepo: CarouselRepository) {
        this.carouselRepo = _carouselRepo;
    }

    async invoke(){
        const getItems = this.carouselRepo.getItems();
        return getItems;
    }
}