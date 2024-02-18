
import { PetsRepositoryInMemory } from '@/repository/PetsRepositories/PetsRepositoryInMemory';
import { beforeEach, describe, expect, it } from 'vitest';
import { ShowPetsUseCase } from './ShowPetUseCase';

let sut:ShowPetsUseCase;
let petsRepositoryInMemory: PetsRepositoryInMemory;

describe('Show Pet UseCase', () => {
    beforeEach(async()=>{

        petsRepositoryInMemory = new PetsRepositoryInMemory();
        sut = new ShowPetsUseCase(petsRepositoryInMemory);

    })
    it('should be able to create a new org',async ()=>{
    const pet=     await petsRepositoryInMemory.create({
       about: 'some description',
       age: 'puppy', 
       energyLevel:' highest'  ,
       environment: 'production',
       independencyLevel: 'production', //
       name:'some name here',
       orgId: 3,
       size: 'big',    
        
        })

        

             const petSearched = await sut.execute(pet.id as string);
        expect(petSearched).toHaveProperty('orgId',3);
        expect(petSearched).toHaveProperty('id');

    })
})