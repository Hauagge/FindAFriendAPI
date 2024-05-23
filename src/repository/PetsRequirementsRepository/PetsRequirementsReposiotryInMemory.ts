import { IFilterPEts } from "@/DTOS/IFilterPets";
import { Pets } from "@/models/Pets";

import { PetsRequirements } from "@/models/PetsRequirements";
import { IPetsRequirementsRepository } from "./IPetsRequirementsRepository";



class PetsRequirementsRepositoryInMemory implements 
IPetsRequirementsRepository{
   async  create(requirement: PetsRequirements): Promise<PetsRequirements> {
       const petRequirement:PetsRequirements = new PetsRequirements();
         Object.assign(petRequirement,{
              id: Math.random().toString(),
              petId: requirement.petId,
              requirementsId: requirement.requirementsId,
              createAt: new Date(),
              updateAt: new Date(),
         })

         this.petsRequirements.push(petRequirement as PetsRequirements);

         return petRequirement
    }
  async  list(): Promise<PetsRequirements[]> {
       return this.petsRequirements;
    }
   async  findById(id: string): Promise<PetsRequirements | undefined> {
        return this.petsRequirements.find((petRequirement) => petRequirement.id === id);
    }
   
    private petsRequirements: PetsRequirements[] = [];
    

}

export { PetsRequirementsRepositoryInMemory };