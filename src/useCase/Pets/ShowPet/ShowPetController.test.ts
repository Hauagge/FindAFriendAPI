import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { app } from '../../../app';


describe('Show Pet Controller', () => {


    beforeAll(async () => {
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });


    it('should be able show pet information', async () => {
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

       const pet = await request(app.server).post('/api/v1/pets')
        .set('Authorization', `Bearer ${authenticate.body.token}`)
        .send({
            about: 'some description',
            age: 'toddler', 
            energyLevel:' highest'  ,
            environment: 'production',
            independencyLevel: 'production', //
            name:'some name here',
            size: 'big',
            requirements: ['free space', 'food', 'water'],
        });

        const response = await request(app.server).get(`/api/v1/pets/${pet.body.id}` );
        console.log(response.error)
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name', 'some name here');
    });
  
}
);