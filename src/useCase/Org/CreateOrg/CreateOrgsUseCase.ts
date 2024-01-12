import { IHashProvider } from '@/providers/hashProvider/IHashProvider';
import { Prisma } from '@prisma/client';
import { EmailAlreadyRegisteredError } from '../../../errors/EmailAlreadyExists';
import { OrgsRepository } from '../../../repository/OrgsRepositories/OrgsRepository';

class CreateOrgsUseCase {
    constructor(
        private orgsRepository: OrgsRepository,
        private hashProvider: IHashProvider
        ) {}

    async execute({
        organizationName,
        ownerName,
        email,
        password,
        phone,
        address,
        city,
        latitude,
        longitude,
        zipCode,
    }: Prisma.OrgsCreateInput) {
        const orgAlreadyExists = await this.orgsRepository.findByEmail(email);
        if (orgAlreadyExists) throw new EmailAlreadyRegisteredError();
        const org = await this.orgsRepository.create({
            organizationName,
            ownerName,
            email,
            password: await this.hashProvider.encrypt(password),
            phone,
            address,
            city,
            latitude,
            longitude,
            zipCode,
        });
        return { org };
    }
}

export { CreateOrgsUseCase };
