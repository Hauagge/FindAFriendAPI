import { FastifyInstance } from 'fastify';
import { createOrgsController } from '../useCase/Org/CreateOrgsController';

export async function userRoutes(app: FastifyInstance, options: any) {
    app.post('/orgs', createOrgsController);
}
