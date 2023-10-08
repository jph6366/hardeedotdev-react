import { PageAppItem, SinglePageApp } from "../../Model/SinglePageApp";
import { PageAppRepository } from "../../Repository/PageAppRepository";

export interface SetPageContentUseCase {
    invoke: (pageContent: PageAppItem) => Promise<void>;
};

export class SetPageContent implements SetPageContentUseCase {
    private pageappRepo: PageAppRepository;
    constructor(_pageappRepo: PageAppRepository) {
        this.pageappRepo = _pageappRepo;
    }

    async invoke(pageContent: PageAppItem){
        this.pageappRepo.setPageContent(pageContent);
    }
}