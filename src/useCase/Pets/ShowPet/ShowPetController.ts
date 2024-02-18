

import { PetsRepository } from "@/repository/PetsRepositories/PetsRepository";
import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { ShowPetsUseCase } from "./ShowPetUseCase";

const showSchema = z.object({
 id: z.string().uuid(),
});
async function showPetsController(request: FastifyRequest, reply: FastifyReply) {
    const {id} = showSchema.parse(request.params);

    const petsRepository = new PetsRepository();
    const filterPetsUseCase = new ShowPetsUseCase(petsRepository);
    const pets = await filterPetsUseCase.execute(id);
    return reply.status(200).send(pets);
}

export { showPetsController };
