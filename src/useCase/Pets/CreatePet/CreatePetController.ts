import { IFilename } from "@/DTOS/IFileName";
import { ImageRepository } from "@/repository/ImageRepository/ImageRepository";
import { PetsRepository } from "@/repository/PetsRepositories/PetsRepository";
import { PetsRequirementsRepository } from "@/repository/PetsRequirementsRepository/PetsRequerimentsRepository";
import { RequirementsRepository } from "@/repository/RequirementsRepositories/RequirementsRepository";
import { FastifyReply, FastifyRequest } from "fastify";
import { File } from 'fastify-multer/lib/interfaces';
import { z } from "zod";
import { CreatePetsUseCase } from "./CreatePetUseCase";

declare module 'fastify' {
    export interface FastifyRequest {
      files: File[]
    }
  }

async function createPetsController(request: FastifyRequest,
    reply: FastifyReply) {
        try {
          const petsRequirementsRepository = new PetsRequirementsRepository();
          const requirementsRepository = new RequirementsRepository();
          const imagesRepository = new ImageRepository();
          const petsRepository = new PetsRepository();
            const createPetBodySchema = z.object({
                name: z.string(),
                age: z.string(),
                about: z.string(),
                energyLevel: z.string(),
                environment: z.string(),
                independencyLevel: z.string(),
                size: z.string(),
                requirements: z.string().array().optional(),
               
            });
            const images: IFilename[] = request.files.map((file) => ({
                filename: file.filename ?? '', // Ensure filename is not undefined
              }))
            const { 
                name, 
                about, 
                age, 
                size,
                energyLevel,
                independencyLevel,
                environment,
                requirements,
            } = createPetBodySchema.parse(request.body);
      
            const orgId = Number(request.user.sub);

            const createPetUseCase = new CreatePetsUseCase(petsRepository,requirementsRepository, petsRequirementsRepository,imagesRepository,);


            const pet = await createPetUseCase.execute({
                name,
                age,
                about,
                energyLevel,
                environment,
                independencyLevel,
                size,
                orgId,
                requirements,
                images

            });

            return reply.status(201).send(pet);

        }catch(err){
          console.log(err)
            throw reply.status(400).send({error: err});
        }

}

export { createPetsController };
