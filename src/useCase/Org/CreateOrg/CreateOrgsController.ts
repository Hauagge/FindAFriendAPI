import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { EmailAlreadyRegisteredError } from '@/errors/EmailAlreadyExists';
import { OrgsRepository } from '../../../repository/OrgsRepositories/OrgsRepository';
import { CreateOrgsUseCase } from './CreateOrgsUseCase';

async function createOrgsController(
    request: FastifyRequest,
    reply: FastifyReply
) {

    try{

        const createOrgsBodySchema = z.object({
            organizationName: z.string(),
            ownerName: z.string(),
            email: z.string(),
            password: z.string(),
            phone: z.string(),
            address: z.string(),
            city: z.string(),
            latitude: z.string(),
            longitude: z.string(),
            zipCode: z.string(),
        });
        const {
            organizationName,
            ownerName,
            email,
            password,
            phone,
            address,
            city,
            latitude,
            longitude,
            zipCode,
        } = createOrgsBodySchema.parse(request.body);
    
        const orgsRepository = new OrgsRepository();
        const createOrgsUseCase = new CreateOrgsUseCase(orgsRepository);
        const { org } = await createOrgsUseCase.execute({
            organizationName,
            ownerName,
            email,
            password,
            phone,
            address,
            city,
            latitude,
            longitude,
            zipCode,
        });
        reply.status(201).send(org);
    }catch(err){
        if(err instanceof EmailAlreadyRegisteredError){
        reply.status(400).send({error: err.message});
    }
    return reply
    .status(500)
    .send({ message: `Internal Server Error:${err}` });
    }
}
export { createOrgsController };
