import { IPetsRepository } from "@/repository/PetsRepositories/IPetsRepository";




class CreatePetsUseCase {

    constructor(private petsRepository: IPetsRepository) { }


    async execute(data: any): Promise<any> {
        const pet = await this.petsRepository.create(data);
        return pet;
    }
}


export { CreatePetsUseCase };
