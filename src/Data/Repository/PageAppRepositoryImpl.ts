import { PageAppItem } from "../../Domain/Model/SinglePageApp";
import { PageAppRepository } from "../../Domain/Repository/PageAppRepository";
import { DataSource } from "../DataSource/DataSource";

export class PageAppRepositoryImpl implements PageAppRepository {

    dataSource: DataSource

    constructor(dataSource: DataSource) {
        this.dataSource = dataSource;
    }

    async setPageContent(spa: PageAppItem): Promise<void> {
        await this.dataSource.setSPA(spa);
    }

    async getPageContent(): Promise<PageAppItem> {
        const pageContent = this.dataSource.getSPA();
        return pageContent;
    }
}