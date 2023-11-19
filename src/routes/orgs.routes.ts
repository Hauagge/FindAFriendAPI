import { authenticateOrgsController } from '@/useCase/Org/AuthenticateOrgs/AuthenticateOrgsController';
import { FastifyInstance } from 'fastify';
import { createOrgsController } from '../useCase/Org/CreateOrg/CreateOrgsController';

export async function orgsRoutes(app: FastifyInstance, options: any) {
    app.post('/', createOrgsController);

    app.post('/authenticate', authenticateOrgsController);
}
