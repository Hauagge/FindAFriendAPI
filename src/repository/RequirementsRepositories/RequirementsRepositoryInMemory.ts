import { Requirements } from "@/models/Requeriments";
import { IRequirementsRepository } from "./IRequirementsRepository";
import { randomUUID } from "crypto";


class RequirementsRepositoryInMemory implements  IRequirementsRepository{

    private requirements: Requirements[] = [];

    async create({description}:Requirements): Promise<Requirements> {
        const newRequirements = {
            id:randomUUID(),
            description,
            createdAt: new Date(),
            updatedAt: new Date()
        }
        this.requirements.push(
            newRequirements
        );
        return newRequirements
    }
    async list(): Promise<any[]> {
        return this.requirements;
    }
 
    findById(id: string): Promise<Requirements | undefined> {
        throw new Error("Method not implemented.");
    }
    delete(id: string): Promise<void> {
        throw new Error("Method not implemented.");
    }
    update(requirement: Requirements): Promise<void> {
        throw new Error("Method not implemented.");
    }
   async findByDescription(description: string): Promise<Requirements | undefined> {
        return this.requirements.find(requirement => requirement.description === description);
    }
}

export { RequirementsRepositoryInMemory}