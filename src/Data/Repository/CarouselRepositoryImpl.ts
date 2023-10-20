import { CarouselItem } from "../../Domain/Model/Carousel";
import { CarouselRepository } from "../../Domain/Repository/CarouselRepository";

export class CarouselRepositoryImpl implements CarouselRepository {

    

    setCarouselAngle(angle: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
    setTouch(touchX: number): Promise<number> {
        throw new Error("Method not implemented.");
    }
    setItems(items: CarouselItem[]): Promise<CarouselItem[]> {
        throw new Error("Method not implemented.");
    }
    getItems(): Promise<CarouselItem[]> {
        throw new Error("Method not implemented.");
    }
    getItemContent(title: string): Promise<string> {
        throw new Error("Method not implemented.");
    }
    
}