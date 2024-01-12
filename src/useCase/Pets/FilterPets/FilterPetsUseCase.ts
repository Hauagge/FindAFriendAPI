import { IFilterPEts } from "@/DTOS/IFilterPets";
import { IPetsRepository } from "@/repository/PetsRepositories/IPetsRepository";



class FilterPetsUseCase {
    constructor(
        private petsRepository: IPetsRepository,
        ) { }
    async execute(data:IFilterPEts) {
        const pets = await this.petsRepository.filter(data);
        return pets;
    }
}

export { FilterPetsUseCase };
