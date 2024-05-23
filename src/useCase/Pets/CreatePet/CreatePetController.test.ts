import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { app } from '../../../app';


describe('Create Pet Controller', () => {


    beforeAll(async () => {
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });


    it('should be able create a new pet', async () => {
        await request(app.server).post('/api/v1/orgs').send({
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

        const authenticate = await request(app.server).post('/api/v1/orgs/authenticate').send({
            email:'email@test.com',
            password:'123456',
        });

        const response =  await request(app.server).post('/api/v1/pets')
        .set('Authorization', `Bearer ${authenticate.body.token}`)
        .send({
            about: 'some description',
            age: 'puppy', 
            energyLevel:' highest'  ,
            environment: 'production',
            independencyLevel: 'production', //
            name:'some name here',
            size: 'big',
            requirements: ['free space', 'food', 'water'],
        });
       
        expect(response.status).toBe(201);
        expect(response.body).toHaveProperty('id');
    });
  
}
);