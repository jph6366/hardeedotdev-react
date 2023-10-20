import { CarouselRepository } from "../../Repository/CarouselRepository";

export interface SetCarouselAngle {
    invoke: (angle: number) => Promise<number>;
};

export class SetAngle implements SetCarouselAngle {
    private carouselRepo: CarouselRepository;
    constructor(_carouselRepo: CarouselRepository) {
        this.carouselRepo = _carouselRepo;
    }

    async invoke(angle: number){
        const setAngle = this.carouselRepo.setCarouselAngle(angle);
        return setAngle;
    }
}