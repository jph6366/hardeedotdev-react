import { CarouselRepository } from "../../Repository/CarouselRepository";

export interface GetItemContentUseCase {
    invoke: (title: string) => Promise<string>;
};

export class GetItemContent implements GetItemContentUseCase {
    private carouselRepo: CarouselRepository;
    constructor(_carouselRepo: CarouselRepository) {
        this.carouselRepo = _carouselRepo;
    }

    async invoke(title: string){
        const getItems = this.carouselRepo.getItemContent(title);
        return getItems;
    }
}