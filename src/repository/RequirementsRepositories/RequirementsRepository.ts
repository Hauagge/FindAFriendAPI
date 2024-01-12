import prisma from "@/db/prismaClient";
import { Requirements } from "@/models/Requeriments";
import { IRequirementsRepository } from "./IRequirementsRepository";



class RequirementsRepository implements IRequirementsRepository{
  
    async create(data:Requirements): Promise<Requirements> {
       return await prisma.requirements.create({
            data:{
                description: data.description,
            }
        })
    }
    async list(): Promise<Requirements[]> {
        return await prisma.requirements.findMany({
          
            orderBy:{
               createdAt:"desc"
            }
        });
    }
    async findById(id:string): Promise<Requirements | undefined> {
       return await prisma.requirements.findUnique({
            where:{
                id
            }
        }) ?? undefined;
    }
    async delete(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    async update(): Promise<void> {
        throw new Error("Method not implemented.");
    }

   async findByDescription(description: string): Promise<Requirements | undefined> {
         return await prisma.requirements.findFirst({
              where:{
                description
              }
         }) ?? undefined;   
    }
}

export { RequirementsRepository };
