
import { HashProviderInMemory } from '@/providers/hashProvider/HashProviderInMemory';
import { PetsRepositoryInMemory } from '@/repository/PetsRepositories/PetsRepositoryInMemory';
import { beforeEach, describe, expect, it } from 'vitest';
import { CreatePetsUseCase } from './CreatePetUseCase';
import { RequirementsRepositoryInMemory } from '@/repository/RequirementsRepositories/RequirementsRepositoryInMemery';
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
        sut = new CreatePetsUseCase(
            petsRepositoryInMemory,requirementsRepositoryInMemory,petRequirementsRepositoryInMemory,imagePetRepositoryInMemory);

    })
    it('should be able to create a pet ',async ()=>{
        const pet = await sut.execute({
           name: 'any_name',
            age: 'toddler',
            about: 'any_about',
            energyLevel: 'high',
            environment: 'indoor',
            independencyLevel: 'high',
            orgId: 1,
            size: 'small',
            requirements: ['any_requirement','any_requirement2'],

        })

        expect(pet).toHaveProperty('id');
    })
})