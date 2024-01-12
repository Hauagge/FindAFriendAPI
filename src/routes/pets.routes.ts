import uploadConfig from '@/@config/upload';
import { verifyJwt } from '@/middleware/CheckSessionsIdExists';
import { createPetsController } from '@/useCase/Pets/CreatePet/CreatePetController';
import { filterPetsController } from '@/useCase/Pets/FilterPets/FilterPetsController';
import { FastifyInstance } from 'fastify';
import multer from 'fastify-multer';
import { petsSchema, responsePets } from './schemas/petsSchema';

const upload = multer(uploadConfig);
export async function petsRoutes(app: FastifyInstance, options: any) {
  app.post(
    '/',
    {
      onRequest: [verifyJwt],
      schema: {
        tags: ['Pets'],
        body: petsSchema,
        response: responsePets,
      },
      preValidation: upload.array('images', 6),
    },
    createPetsController
  );

  app.get(
    '/',
    {
      onRequest: [verifyJwt],
      schema: {
        tags: ['Pets'],
        response: responsePets,
      },
    },
    filterPetsController
  );

  app.get(
    '/:id',
    {
      onRequest: [verifyJwt],
      schema: {
        tags: ['Pets'],
        params: {
          type: 'object',
          properties: {
            id: { type: 'string' },
          },
        },
        response: responsePets,
      },
    },
    filterPetsController
  );
}
