import prisma from "@/db/prismaClient";
import { PetsRequirements } from "@/models/PetsRequirements";
import { IPetsRequirementsRepository } from "./IPetsRequirementsRepository";



class PetsRequirementsRepository implements  IPetsRequirementsRepository {
   async  create(requirement: PetsRequirements): Promise<PetsRequirements> {
        return await prisma.petsRequirements.create({
            data: {
                petId: requirement.petId,
                requirementsId: requirement.requirementsId
            }
        })
    }
   async  list(): Promise<PetsRequirements[]> {
      return await prisma.petsRequirements.findMany();
    }
   async findById(id: string): Promise<PetsRequirements | undefined> {
       return await prisma.petsRequirements.findUnique({
              where: {
                id
              }
         }) || undefined;
    }
   
   

}

export { PetsRequirementsRepository };
