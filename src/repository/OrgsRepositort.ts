import { Prisma, Orgs } from '@prisma/client';
import prisma from '../db/prismaClient';
import { IOrgsRepository } from './IOrgsRepository';

class OrgsRepository implements IOrgsRepository {
    async create(data: Prisma.OrgsCreateInput): Promise<Orgs> {
        return await prisma.orgs.create({ data });
    }
    save(Orgs: Orgs): Promise<Orgs> {
        throw new Error('Method not implemented.');
    }
    findById(id: string): Promise<Orgs | undefined> {
        throw new Error('Method not implemented.');
    }
    async findByEmail(email: string): Promise<Orgs | undefined> {
        const org = await prisma.orgs.findUnique({ where: { email } });
        if (!org) return undefined;
        return org;
    }
    findByName(name: string): Promise<Orgs | undefined> {
        throw new Error('Method not implemented.');
    }
    findAll(): Promise<Orgs[]> {
        throw new Error('Method not implemented.');
    }
}

export { OrgsRepository };
