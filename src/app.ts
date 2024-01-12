import fastifyJwt from '@fastify/jwt';
import swagger from '@fastify/swagger';
import fastifySwaggerUi from '@fastify/swagger-ui';
import fastify from 'fastify';
import multer from 'fastify-multer';
import { ZodError } from 'zod';

import { env } from './env';
import { orgsRoutes } from './routes/orgs.routes';
import { petsRoutes } from './routes/pets.routes';
const app = fastify();
app.register(multer.contentParser)
app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie: {
        cookieName: 'refreshToken',
        signed: false,
    },
    sign: {
        expiresIn: '1h',
    },
});

const swaggerOptions = {
    swagger: {
        info: {
            title: 'IPM',
            description: 'API Documentation',
            version: '1.0.0',
        },
        host: 'localhost',
        schemes: ['http', 'https'],
        consumes: ['multipart/form-data', 'application/json'],
        produces: ['application/json'],
        tags: [{ name: 'default', description: 'default' }],
    },
};

const swaggerUiOptions = {
    routePrefix: '/docs',
    exposeRoute: true,
};


app.register(swagger, swaggerOptions);
app.register(fastifySwaggerUi, swaggerUiOptions);

app.get('/', (request, reply) => {
    return { hello: 'world' };
});
app.register(orgsRoutes, {
    prefix: '/api/v1/orgs',
});

app.register(petsRoutes, {

    prefix: '/api/v1/pets',
});
app.setErrorHandler((error, _, reply) => {
    if (error instanceof ZodError) {
        return reply.status(400).send({
            message: error.message,
            errors: error.format(),
        });
    }

    if (env.NODE_ENV !== 'production') {
        console.log(error);
    }

    return reply.status(500).send({ 'Internal Server Error': error });
});
export { app };
