import { PetsRepository } from "@/repository/PetsRepositories/PetsRepository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreatePetsUseCase } from "./CreatePetUseCase";




async function createPetsController(request: FastifyRequest,
    reply: FastifyReply) {

        try {

            const createPetBodySchema = z.object({
                name: z.string(),
                age: z.string(),
                type: z.string(),
                breed: z.string(),
                city: z.string(),
                about: z.string(),
                description: z.string(),
                energyLevel: z.string(),
                environment: z.string(),
                independencyLevel: z.string(),
                size: z.string(),
               
            });

            const { 
                name, 
                age, 
                about, 
                energyLevel,
                environment,
                independencyLevel,
                size
            } = createPetBodySchema.parse(request.body);

            const orgId = Number(request.user.sub);

            const createPetUseCase = new CreatePetsUseCase(new PetsRepository());


            const pet = await createPetUseCase.execute({
                name,
                age,
                about,
                energyLevel,
                environment,
                independencyLevel,
                size,
                orgId
            });

            return reply.status(201).send(pet);

        }catch(err){
            return reply.status(500).send({error: err});
        }

}

export { createPetsController };
