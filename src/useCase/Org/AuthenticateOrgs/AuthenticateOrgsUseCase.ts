import { InvalidCredentialsError } from '@/errors/InvalidCredentials';
import { IHashProvider } from '@/providers/hashProvider/IHashProvider';
import { IOrgsRepository } from '@/repository/OrgsRepositories/IOrgsRepository';

interface IAuthenticateUseCase {
    email: string;
    password: string;
}

export class AuthenticateUseCase {
    constructor(
        private orgRepository: IOrgsRepository,
        private hashProvider: IHashProvider
        ) {}

    async execute({ email, password }: IAuthenticateUseCase) {
        const org = await this.orgRepository.findByEmail(email);

        if (!org) {
            throw new InvalidCredentialsError();
        }

        const doesPasswordMatches = await this.hashProvider.compare(password, org.password);

        if (!doesPasswordMatches) {
            throw new InvalidCredentialsError();
        }

        return { org };
    }
}
