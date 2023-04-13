import { FastifyRequest, FastifyReply } from 'fastify';
import { z } from 'zod';

import { OrgsRepository } from '../../repository/OrgsRepositort';
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
    const authenticateOrgsUseCase = new AuthenticateUseCase(orgsRepository);
    const { org } = await authenticateOrgsUseCase.execute({
        email,
        password,
    });
    reply.status(201).send(org);
}
export { authenticateOrgsController };
