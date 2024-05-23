import request from 'supertest';
import { afterAll, beforeAll, describe, expect, it } from 'vitest';
import { app } from '../../../app';


describe('Filter Pet Controller', () => {


    beforeAll(async () => {
        await app.ready();
    });

    afterAll(async () => {
        await app.close();
    });


    it('should be able filter pets', async () => {
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

       await request(app.server).post('/api/v1/pets')
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


    const org=    await request(app.server).post('/api/v1/orgs').send({
            organizationName:'PAES2',
            ownerName:'Jhon Tre',
            email:'email1@test.com',
            password:'123456',
            phone:'1234565678',
            address:'Rua dos Rios',
            city:'Rio do Sul',
            state:'RS',
            latitude:'123456',
            longitude:'123456',
            zipCode:'123456',
        });

        const authenticate1 = await request(app.server).post('/api/v1/orgs/authenticate').send({
            email:'email1@test.com',
            password:'123456',
        });
         await request(app.server).post('/api/v1/pets')
        .set('Authorization', `Bearer ${authenticate1.body.token}`)
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

        await request(app.server).post('/api/v1/pets')
        .set('Authorization', `Bearer ${authenticate1.body.token}`)
        .send({
            about: 'some description',
            age: 'adult', 
            energyLevel:' highest'  ,
            environment: 'production',
            independencyLevel: 'production', //
            name:'some name here',
            size: 'big',
            requirements: ['free space', 'food', 'water'],
        });
        const response = await request(app.server).get('/api/v1/pets?city=Rio Do Sul&age=toddler' );
        expect(response.status).toBe(200);
        expect(response.body).toHaveLength(1);
    });
  
}
);