import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { makeCreateOrgsFactory } from '@/Factories/Orgs/makeCreateOrgFactory';
import { EmailAlreadyRegisteredError } from '@/errors/EmailAlreadyExists';

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
    
       const createOrgUseCase =  makeCreateOrgsFactory()
        const { org } = await createOrgUseCase.execute({
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
