import { IPetsRepository } from "@/repository/PetsRepositories/IPetsRepository";



class ShowPetsUseCase {
    constructor(
        private petsRepository: IPetsRepository,
        ) { }
    async execute(id:string) {
        const pets = await this.petsRepository.findById(id);
        return pets;
    }
}

export { ShowPetsUseCase };
