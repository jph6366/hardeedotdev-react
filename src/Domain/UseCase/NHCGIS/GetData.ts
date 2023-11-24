import { NHCGISRepository } from "../../Repository/NHCGISRepository";


export interface GetDataUseCase {
    invoke: () => Promise<any>;
};

export class GetDataContent implements GetDataUseCase {
    private nhcgisRepo: NHCGISRepository;
    constructor(_nhcgisRepo: NHCGISRepository) {
        this.nhcgisRepo = _nhcgisRepo;
    }

    async invoke(){
        const gisData = this.nhcgisRepo.getData();
        return gisData;
    }
}