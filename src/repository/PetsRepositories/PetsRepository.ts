import { IFilterPEts } from "@/DTOS/IFilterPets";
import prisma from "@/db/prismaClient";
import { Pets } from "@/models/Pets";
import { IPetsRepository } from "./IPetsRepository";


class PetsRepository implements IPetsRepository {
   
    async filter(data: IFilterPEts): Promise<Pets[] > {
        return await prisma.pets.findMany({
            where: {
                org:{
                   city:{
                    contains: data.city,
                    mode: "insensitive"
                   }
                }
            }
        }) ;
    }
   
  

    async create(pet: Pets): Promise<Pets> {
        const newPet = await prisma.pets.create({
            data:pet
        });
        return newPet;
    }


    async findById(id: string): Promise<Pets | undefined> {
        const pet = await prisma.pets.findUnique({
            where: {
                id: id
            }
        });
        return pet || undefined;
    }

    async update(id: string, pet: Pets): Promise<Pets> {
        const updatedPet = await prisma.pets.update({
            where:{
                id: id
            },
            data:pet
            
        });
        return updatedPet as Pets;
    }

    async delete(id: string): Promise<void> {
        await prisma.pets.delete({
            where: {
                id: id
            }
        });
    }

  async  findAll(): Promise<Pets[]> {
       return await prisma.pets.findMany();
    }
  
}

export { PetsRepository };
