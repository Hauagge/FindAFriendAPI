import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { app } from '../../../app';


describe('Create Org Controller', () => {


    beforeAll(async () => {
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });


    it('should be able create a new Org', async () => {
        const org = await request(app.server).post('/api/v1/orgs').send({
            organizationName:'PAES',
            ownerName:'Jhon Doe',
            email:'email@test.com',
            password:'123456',
            phone:'1234565678',
            address:'Rua das FLores',
            city:'São Paulo',
            state:'SP',
            latitude:'123456',
            longitude:'123456',
            zipCode:'123456',
        });


        const response = await request(app.server).post('/api/v1/orgs/authenticate').send({
            email:'email@test.com',
            password:'123456',
        });

        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('token');
    });
  
}
);