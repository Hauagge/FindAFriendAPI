
import { HashProviderInMemory } from '@/providers/hashProvider/HashProviderInMemory';
import { PetsRepositoryInMemory } from '@/repository/PetsRepositories/PetsRepositoryInMemory';
import { beforeEach, describe, expect, it } from 'vitest';
import { CreatePetsUseCase } from './CreatePetUseCase';

let sut:CreatePetsUseCase;
let petsRepositoryInMemory: PetsRepositoryInMemory;
let requirementsRepositoryInMemory: RequirementsRepositoryInMemory;
let petRequirementsRepositoryInMemory: PetRequirementsRepositoryInMemory;
let imagePetRepositoryInMemory: ImagePetRepositoryInMemory;

let hashProviderInMemory: HashProviderInMemory;
describe('Create Pet UseCase', () => {
    beforeEach(async()=>{

        petsRepositoryInMemory = new PetsRepositoryInMemory();
        hashProviderInMemory = new HashProviderInMemory();
        sut = new CreatePetsUseCase(petsRepositoryInMemory,);

    })
    it('should be able to create a new org',async ()=>{
        const newOrg = await sut.execute({
            organizationName: 'test',
            ownerName: 'test',
            email: 'email@test.com',
            password: '1234',
            phone: '1234',
            address: '1234',
            city: '1234',
            latitude: '1234',
            longitude: '1234',
            zipCode: '1234',
        })

        expect(newOrg.org).toHaveProperty('id');
    })
})