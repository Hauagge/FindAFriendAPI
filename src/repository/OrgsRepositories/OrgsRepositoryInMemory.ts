import { Orgs } from "@/models/Orgs";
import { IOrgsRepository } from "./IOrgsRepository";



class OrgsRepositoryInMemory implements IOrgsRepository{
    orgs:Orgs[] = [];
    async create(data: Orgs): Promise<Orgs> {
       const newOrg = {
              ...data,
              id: this.orgs.length + 1,
              createAt: new Date(),
              updateAt: new Date(),
         
       }
       this.orgs.push(newOrg);
       return newOrg;
    }
    async update(data: Orgs): Promise<Orgs> {
       const orgIndex = this.orgs.findIndex((org) => org.id === data.id);
         this.orgs[orgIndex] = {
            ...this.orgs[orgIndex],
                ...data,
                updatedAt: new Date(),
         }
         return this.orgs[orgIndex];
    }
   async  findById(id: number): Promise<Orgs | undefined> {
        const org = this.orgs.find((org) => org.id === id);
        return org;
    }
   async findByEmail(email: string): Promise<Orgs | undefined> {
        return new Promise((resolve) => resolve(this.orgs.find((org) => org.email === email)));
    }
    async findByName(name: string): Promise<Orgs | undefined> {
       const org = this.orgs.find((org) => org.organizationName === name);
         return org;
    }
  async  findAll(): Promise<Orgs[]> {
        return new Promise((resolve) => resolve(this.orgs));
    }
    
}

export { OrgsRepositoryInMemory };
