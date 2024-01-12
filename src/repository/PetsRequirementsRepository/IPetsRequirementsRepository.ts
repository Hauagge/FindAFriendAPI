import { PetsRequirements } from "@/models/PetsRequirements";


interface IPetsRequirementsRepository {
    create(requirement: PetsRequirements): Promise<PetsRequirements>;
    list(): Promise<PetsRequirements[]>;
    findById(id: string): Promise<PetsRequirements | undefined>;
}

export { IPetsRequirementsRepository };

