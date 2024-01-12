import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

import { BcryptHashProvider } from '@/providers/hashProvider/BcryptHashProvider';
import { OrgsRepository } from '../../../repository/OrgsRepositories/OrgsRepository';
import { AuthenticateUseCase } from './AuthenticateOrgsUseCase';

async function authenticateOrgsController(
    request: FastifyRequest,
    reply: FastifyReply
) {
    const authenticateOrgsBodySchema = z.object({
        email: z.string(),
        password: z.string(),
    });
    const { email, password } = authenticateOrgsBodySchema.parse(request.body);

    const orgsRepository = new OrgsRepository();
    const hashProvider = new BcryptHashProvider();
    const authenticateOrgsUseCase = new AuthenticateUseCase(orgsRepository,hashProvider);

    const { org } = await authenticateOrgsUseCase.execute({
        email,
        password,
    });

    const token = await reply.jwtSign({
        sub: org.id,
        expiresIn: '7d',
    });
    reply.status(201).send({ token, organization: org.organizationName, id: org.id});
}
export { authenticateOrgsController };
