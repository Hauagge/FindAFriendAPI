
import { PetsRepositoryInMemory } from '@/repository/PetsRepositories/PetsRepositoryInMemory';
import { beforeEach, describe, expect, it } from 'vitest';
import { FilterPetsUseCase } from './FilterPetsUseCase';

let sut:FilterPetsUseCase;
let petsRepositoryInMemory: PetsRepositoryInMemory;

describe('Create Pet UseCase', () => {
    beforeEach(async()=>{

        petsRepositoryInMemory = new PetsRepositoryInMemory();
        sut = new FilterPetsUseCase(petsRepositoryInMemory);

    })
    it('should be able to create a new org',async ()=>{
         await petsRepositoryInMemory.create({
       about: 'some description',
       age: 'toddler', 
       energyLevel:' highest'  ,
       environment: 'production',
       independencyLevel: 'production', //
       name:'some name here',
       orgId: 3,
       size: 'big',    
       org:{
        id:3,
        city:'Campo Mourão'
    }       
        })

        await petsRepositoryInMemory.create({
            about: 'some description',
            age: 'toddler', 
            energyLevel:' highest'  ,
            environment: 'production',
            independencyLevel: 'production', //
            name:'some name here',
            orgId: 2,
            size: 'big', 
            org:{
                id:2,
                city:'Rio do Sul'
            }          
             })
        await petsRepositoryInMemory.create({
            about: 'some description',
            age: 'toddler', 
            energyLevel:' highest'  ,
            environment: 'production',
            independencyLevel: 'production', //
            name:'some name here',
            orgId: 1,
            size: 'big',   
            org:{
                id: 1,
                city:'Sao Paulo'
            }    
             })

             await petsRepositoryInMemory.create({
                about: 'some description',
                age: 'adult', 
                energyLevel:' highest'  ,
                environment: 'production',
                independencyLevel: 'production', //
                name:'some name here',
                orgId: 1,
                size: 'big',   
                org:{
                    id: 1,
                    city:'Sao Paulo'
                }    
                 })

             const pets = await sut.execute({city: 'Sao Paulo', age:'toddler'});
        expect(pets).toHaveLength(1);
    })
})