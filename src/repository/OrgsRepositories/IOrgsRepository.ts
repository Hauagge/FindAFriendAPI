import { Orgs } from '@/models/Orgs';

export interface IOrgsRepository {
    create(data: Orgs): Promise<Orgs>;
    update(data: Orgs): Promise<Orgs>;
    findById(id: number): Promise<Orgs | undefined>;
    findByEmail(email: string): Promise<Orgs | undefined>;
    findByName(name: string): Promise<Orgs | undefined>;
    findAll(): Promise<Orgs[]>;
}
