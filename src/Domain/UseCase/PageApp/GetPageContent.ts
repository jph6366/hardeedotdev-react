import { SinglePageApp } from "../../Model/SinglePageApp";
import { PageAppRepository } from "../../Repository/PageAppRepository";

export interface GetPageContentUseCase {
    invoke: () => Promise<SinglePageApp>;
};

export class GetPageContent implements GetPageContentUseCase {
    private pageappRepo: PageAppRepository;
    constructor(_pageappRepo: PageAppRepository) {
        this.pageappRepo = _pageappRepo;
    }

    async invoke(){
        const pageContent = this.pageappRepo.getPageContent();
        return pageContent;
    }
}