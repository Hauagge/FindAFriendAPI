import { verifyJwt } from '@/middleware/CheckSessionsIdExists';
import { createPetsController } from '@/useCase/Pets/CreatePet/CreatePetController';
import { FastifyInstance } from 'fastify';

export async function petsRoutes(app: FastifyInstance, options: any) {
    app.post('/',{
        onRequest: [verifyJwt],
    }, createPetsController);


}
