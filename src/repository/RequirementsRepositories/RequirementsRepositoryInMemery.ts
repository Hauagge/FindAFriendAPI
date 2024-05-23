import { Requirements } from "@/models/Requeriments";
import { IRequirementsRepository } from "./IRequirementsRepository";



class RequirementsRepositoryInMemory implements IRequirementsRepository {
  
 
  private requirements: any[] = [];

  async create({ description }: any): Promise<any> {
    const requirement = new Object();
    Object.assign(requirement, {
      description,
      id: Math.random().toString(),
    });
    this.requirements.push(requirement);
    return requirement;
  }
  async findByDescription(description: string): Promise<any> {
    return this.requirements.find((requirement) => requirement.description === description);
  }
  async list(): Promise<Requirements[]> {
     
    return this.requirements;
  }
 async findById(id: string): Promise<Requirements | undefined> {
     const requirement = this.requirements.find((requirement) => requirement.id === id);
        return requirement;
  }
}

export { RequirementsRepositoryInMemory };