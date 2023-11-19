import { InvalidCredentialsError } from '@/errors/InvalidCredentials';
import { IOrgsRepository } from '@/repository/OrgsRepositories/IOrgsRepository';
import { compare } from 'bcryptjs';

interface IAuthenticateUseCase {
    email: string;
    password: string;
}

export class AuthenticateUseCase {
    constructor(private orgRepository: IOrgsRepository) {}

    async execute({ email, password }: IAuthenticateUseCase) {
        const org = await this.orgRepository.findByEmail(email);

        if (!org) {
            throw new InvalidCredentialsError();
        }

        const doesPasswordMatches = await compare(password, org.password);

        if (!doesPasswordMatches) {
            throw new InvalidCredentialsError();
        }

        return { org };
    }
}
