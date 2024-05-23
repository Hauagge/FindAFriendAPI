import { Pets } from "@/models/Pets";
import { v4 as uuid } from 'uuid';
import { IPetsRepository } from "./IPetsRepository";
import { IFilterPEts } from "@/DTOS/IFilterPets";


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
   async  findById(id: string): Promise<Pets | undefined> {
        const pet = this.pets.find((pet) => pet.id === id);
        return pet;
    }
  
   
  async  findAll(): Promise<Pets[]> {
        return new Promise((resolve) => resolve(this.pets));
    }
    async filter(data: IFilterPEts): Promise<Pets[]> {
       const keys = Object.keys(data);
        const values = Object.values(data);
        const pets = this.pets.filter((pet) => {
            let isValid = true;
            keys.forEach((key,index) => {
                if(!pet[key as keyof Pets] || pet[key as keyof Pets] !== values[index]){
                    isValid = false;
                }
            })
            return isValid;
        })
        return pets;

    }
}

export { PetsRepositoryInMemory };
