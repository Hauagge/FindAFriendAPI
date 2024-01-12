import { OrgsRepository } from "@/repository/OrgsRepositories/OrgsRepository";
import { CreateOrgsUseCase } from "@/useCase/Org/CreateOrg/CreateOrgsUseCase";


export function makeCreateOrgsFactory(){
    const orgsRepository = new OrgsRepository();
    const createOrgsUseCase = new CreateOrgsUseCase(orgsRepository);
    return createOrgsUseCase;
}