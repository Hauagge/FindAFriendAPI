import fastify from 'fastify';
import fastifyJwt from '@fastify/jwt';
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

app.listen({ port: 3333 }).then(() => {
    console.log(`Server listening at 3333`);
});
