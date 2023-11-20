import fastifyJwt from '@fastify/jwt';
import fastify from 'fastify';
import { ZodError } from 'zod';
import { env } from './env';
import { orgsRoutes } from './routes/orgs.routes';
import { petsRoutes } from './routes/pets.routes';
const app = fastify();

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

    return reply.status(500).send({ 'Internal Server Error': error.message });
});

app.listen({ port: Number(process.env.PORT) }).then(() => {
    console.log(`Server listening at ${process.env.PORT}`);
});
