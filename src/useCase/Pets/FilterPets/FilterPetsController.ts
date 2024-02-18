import { PetsRepository } from "@/repository/PetsRepositories/PetsRepository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { FilterPetsUseCase } from "./FilterPetsUseCase";

const filterSchema = z.object({
    about: z.string().optional(),
    age: z.string().optional(),
    energyLevel: z.string().optional(),
    environment: z.string().optional(),
    independencyLevel: z.string().optional(),
    size: z.string().optional(),
    city: z.string(),
});
async function filterPetsController(request: FastifyRequest, reply: FastifyReply) {
    const { about, age, energyLevel, environment, independencyLevel, size, city } = filterSchema.parse(request.query);
    const data = {
        about,
        age,
        energyLevel,
        environment,
        independencyLevel,
        size,
        city,
    };
    const petsRepository = new PetsRepository();
    const filterPetsUseCase = new FilterPetsUseCase(petsRepository);
    const pets = await filterPetsUseCase.execute(data);
    return reply.status(200).send(pets);
}

export { filterPetsController };
