import { BcryptHashProvider } from "@/providers/hashProvider/BcryptHashProvider";
import { OrgsRepository } from "@/repository/OrgsRepositories/OrgsRepository";
import { CreateOrgsUseCase } from "@/useCase/Org/CreateOrg/CreateOrgsUseCase";


export function makeCreateOrgsFactory(){
    const orgsRepository = new OrgsRepository();
    const hashProvider = new BcryptHashProvider();
    const createOrgsUseCase = new CreateOrgsUseCase(orgsRepository,hashProvider);
    return createOrgsUseCase;
}