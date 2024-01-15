import { Pets } from "@/models/Pets";
import { v4 as uuid } from 'uuid';
import { IPetsRepository } from "./IPetsRepository";


class PetsRepositoryInMemory implements IPetsRepository {
    pets:Pets[] = [];
    async create(data: Pets): Promise<Pets> {
       const newPet = {
              ...data,
              id: uuid(),
              createAt: new Date(),
              updateAt: new Date(),
         
       }
       this.pets.push(newPet);
       return newPet;
    }
    async update(data: Pets): Promise<Pets> {
       const petIndex = this.pets.findIndex((pet) => pet.id === data.id);
         this.pets[petIndex] = {
            ...this.pets[petIndex],
                ...data,
                updatedAt: new Date(),
         }
         return this.pets[petIndex];
    }
   async  findById(id: number): Promise<Pets | undefined> {
        const pet = this.pets.find((pet) => pet.id === id);
        return pet;
    }
   async findByEmail(email: string): Promise<Pets | undefined> {
        return new Promise((resolve) => resolve(this.pets.find((pet) => pet.email === email)));
    }
    async findByName(name: string): Promise<Pets | undefined> {
       const pet = this.pets.find((pet) => pet.petName === name);
         return pet;
    }
  async  findAll(): Promise<Pets[]> {
        return new Promise((resolve) => resolve(this.pets));
    }
}

export { PetsRepositoryInMemory };
