
import { RequirementsRepositoryInMemory} from '@/repository/RequirementsRepositories/RequirementsRepositoryInMemory';
import { PetsRepositoryInMemory } from '@/repository/PetsRepositories/PetsRepositoryInMemory';
import { beforeEach, describe, expect, it } from 'vitest';
import { CreatePetsUseCase } from './CreatePetUseCase';

import { PetsRequirementsRepositoryInMemory } from '@/repository/PetsRequirementsRepository/PetsRequirementsReposiotryInMemory';

import { ImageRepositoryInMemory } from '@/repository/ImageRepository/ImagesRepositoryInMemory';

let sut:CreatePetsUseCase;
let petsRepositoryInMemory: PetsRepositoryInMemory;
let requirementsRepositoryInMemory: RequirementsRepositoryInMemory;
let petRequirementsRepositoryInMemory: PetsRequirementsRepositoryInMemory;
let imagePetRepositoryInMemory: ImageRepositoryInMemory;

describe('Create Pet UseCase', () => {
    beforeEach(async()=>{

        petsRepositoryInMemory = new PetsRepositoryInMemory();
        requirementsRepositoryInMemory = new RequirementsRepositoryInMemory();
        petRequirementsRepositoryInMemory = new PetsRequirementsRepositoryInMemory();
        imagePetRepositoryInMemory = new ImageRepositoryInMemory();
        sut = new CreatePetsUseCase(petsRepositoryInMemory,requirementsRepositoryInMemory,petRequirementsRepositoryInMemory,imagePetRepositoryInMemory);

    })
    it('should be able to create a new org',async ()=>{
        const newPet = await sut.execute({
       about: 'some description',
       age: 'toddler',
       energyLevel:' highest'  ,
       environment: 'production',
       independencyLevel: 'production', //
       name:'some name here',
       orgId: 1,
       size: 'big',
       requirements: ['free space', 'food', 'water'],

        })
        expect(newPet).toHaveProperty('id');
    })
})