import { NHCGISRepository } from "../../Domain/Repository/NHCGISRepository";
import { NewHanoverCountyDataSource } from "../DataSource/NewHanoverCountyDataSource";

export class NHCGISRepositoryImpl implements NHCGISRepository {

    dataSource: NewHanoverCountyDataSource

    constructor(dataSource: NewHanoverCountyDataSource) {
        this.dataSource = dataSource;
    }

    async getData(): Promise<any> {
        const gisData = this.dataSource.getFirestations;
        return gisData;
    }
}