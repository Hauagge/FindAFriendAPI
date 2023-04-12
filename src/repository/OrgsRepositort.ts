import { Prisma, Orgs } from '@prisma/client';
import prisma from '../db/prismaClient';
import { IOrgsRepository } from './IOrgsRepository';

class OrgsRepository implements IOrgsRepository {
    create(data: Prisma.OrgsCreateInput): Promise<Orgs> {
        return prisma.orgs.create({ data });
    }
    save(Orgs: Orgs): Promise<Orgs> {
        throw new Error('Method not implemented.');
    }
    findById(id: string): Promise<Orgs | undefined> {
        throw new Error('Method not implemented.');
    }
    findByEmail(email: string): Promise<Orgs | undefined> {
        throw new Error('Method not implemented.');
    }
    findByName(name: string): Promise<Orgs | undefined> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<Orgs[]> {
        throw new Error('Method not implemented.');
    }
}
