import fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';
import { ZodError } from 'zod';
import { env } from './env';
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

app.listen({ port: 3333 }).then(() => {
    console.log(`Server listening at 3333`);
});
