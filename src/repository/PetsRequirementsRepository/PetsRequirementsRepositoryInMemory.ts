import { PetsRequirements } from "@/models/PetsRequirements";
import { IPetsRequirementsRepository } from "./IPetsRequirementsRepository";
import { randomUUID } from "crypto";




class PetsRequirementsRepositoryInMemory implements IPetsRequirementsRepository{

    private _petsRequirements: PetsRequirements[] = [];
    create({petId, requirementsId}: PetsRequirements): Promise<PetsRequirements> {

        const newPetsRequirements = {
            id: randomUUID(),
            petId,
            requirementsId,
            createdAt: new Date(),
            updatedAt: new Date()
        }

        this._petsRequirements.push(newPetsRequirements);

        return new Promise<PetsRequirements>((resolve) => {
            resolve(newPetsRequirements);
        });
    }
    list(): Promise<PetsRequirements[]> {
        throw new Error("Method not implemented.");
    }
    findById(id: string): Promise<PetsRequirements | undefined> {
        throw new Error("Method not implemented.");
    }
    
}

export { PetsRequirementsRepositoryInMemory }