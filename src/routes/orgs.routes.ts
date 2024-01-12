import { orgsSchema, responseOrgs } from '@/routes/schemas/orgsSchema';
import { authenticateOrgsController } from '@/useCase/Org/AuthenticateOrgs/AuthenticateOrgsController';
import { FastifyInstance } from 'fastify';
import { createOrgsController } from '../useCase/Org/CreateOrg/CreateOrgsController';

export async function orgsRoutes(app: FastifyInstance, options: any) {
    app.post('/',  {
        schema: {
        tags: ['Orgs'],
        body: orgsSchema,
        response: responseOrgs,}
    },createOrgsController);

    app.post('/authenticate', authenticateOrgsController);
}
