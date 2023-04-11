import { Orgs, Prisma } from '@prisma/client';

export interface IOrgsRepository {
    create(data: Prisma.OrgsCreateInput): Promise<Orgs>;
    save(Orgs: Orgs): Promise<Orgs>;
    findById(id: string): Promise<Orgs | undefined>;
    findByEmail(email: string): Promise<Orgs | undefined>;
    findByName(name: string): Promise<Orgs | undefined>;
    findAll(): Promise<Orgs[]>;
}
