import { CarouselItem } from "../../Model/Carousel";
import { CarouselRepository } from "../../Repository/CarouselRepository";

export interface SetItemsUseCase {
    invoke: (items: CarouselItem[]) => Promise<CarouselItem[]>;
};

export class SetItems implements SetItemsUseCase {
    private carouselRepo: CarouselRepository;
    constructor(_carouselRepo: CarouselRepository) {
        this.carouselRepo = _carouselRepo;
    }

    async invoke(items: CarouselItem[]){
        const setItems = this.carouselRepo.setItems(items);
        return setItems;
    }
}