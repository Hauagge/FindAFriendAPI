import { Prisma } from '@prisma/client';
import { hash } from 'bcryptjs';
import { EmailAlreadyRegisteredError } from '../../errors/EmailAlreadyExists';
import { OrgsRepository } from '../../repository/OrgsRepositort';

class CreateOrgsUseCase {
    constructor(private orgsRepository: OrgsRepository) {}

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
            password: await hash(password, 6),
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
