import { authenticateOrgsController } from '@/useCase/Org/AuthenticateOrgsController';
import { FastifyInstance } from 'fastify';
import { createOrgsController } from '../useCase/Org/CreateOrgsController';

export async function orgsRoutes(app: FastifyInstance, options: any) {
    app.post('/', createOrgsController);

    app.post('/authenticate', authenticateOrgsController);
}
