
import { HashProviderInMemory } from '@/providers/hashProvider/HashProviderInMemory';
import { OrgsRepositoryInMemory } from '@/repository/OrgsRepositories/OrgsRepositoryInMemory';
import { beforeEach, describe, expect, it } from 'vitest';
import { CreateOrgsUseCase } from './CreateOrgsUseCase';

let sut:CreateOrgsUseCase;
let orgsRepositoryInMemory: OrgsRepositoryInMemory;
let hashProviderInMemory: HashProviderInMemory;
describe('Create Org UseCase', () => {
    beforeEach(async()=>{

        orgsRepositoryInMemory = new OrgsRepositoryInMemory();
        hashProviderInMemory = new HashProviderInMemory();
        sut = new CreateOrgsUseCase(orgsRepositoryInMemory,hashProviderInMemory);

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