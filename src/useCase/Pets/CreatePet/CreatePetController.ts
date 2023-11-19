import { PetsRepository } from "@/repository/PetsRepositories/PetsRepository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { CreatePetsUseCase } from "./CreatePetUseCase";




class CreatePetController {


    async Handle(request: FastifyRequest,
        reply: FastifyReply): Promise<FastifyReply> {


            const createPetBodySchema = z.object({
                name: z.string(),
                age: z.number(),
                type: z.string(),
                breed: z.string(),
                weight: z.number(),
                city: z.string(),
                state: z.string(),
                description: z.string(),
                orgId: z.string()
            });

            const { name, age, type, breed, weight, city, state, description, orgId } = createPetBodySchema.parse(request.body);

            const createPetUseCase = new CreatePetsUseCase(new PetsRepository());


            const pet = await createPetUseCase.execute({
                name,
                age,
                type,
                breed,
                weight,
                city,
                state,
                description,
                orgId
            });

            return reply.status(201).send(pet);

        }

}