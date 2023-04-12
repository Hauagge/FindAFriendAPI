import { Prisma } from '@prisma/client';
import { EmailAlreadyRegisteredError } from '../../errors/EmailAlreadyExists';
import { OrgsRepository } from '../../repository/OrgsRepositort';

class CreateOrgsUseCase {
    constructor(private orgsRepository: OrgsRepository) {}

    async execute(data: Prisma.OrgsCreateInput) {
        const orgAlreadyExists = await this.orgsRepository.findByEmail(
            data.email
        );
        if (orgAlreadyExists) throw new EmailAlreadyRegisteredError();
        const org = await this.orgsRepository.create(data);
        return { org };
    }
}
