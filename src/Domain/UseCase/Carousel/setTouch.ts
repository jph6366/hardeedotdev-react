import { CarouselRepository } from "../../Repository/CarouselRepository";

export interface SetTouch {
    invoke: (touchX: number) => Promise<number>;
};

export class SetTouchX implements SetTouch {
    private carouselRepo: CarouselRepository;
    constructor(_carouselRepo: CarouselRepository) {
        this.carouselRepo = _carouselRepo;
    }

    async invoke(touchX: number){
        const setTouchX = this.carouselRepo.setTouch(touchX);
        return setTouchX;
    }
}