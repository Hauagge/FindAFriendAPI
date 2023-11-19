import { Orgs } from '@/models/Orgs';
import prisma from '../../db/prismaClient';
import { IOrgsRepository } from './IOrgsRepository';

class OrgsRepository implements IOrgsRepository {
    async create(data: Orgs): Promise<Orgs> {
        return await prisma.orgs.create({ data });
    }
  async  update(data: Orgs): Promise<Orgs> {
       return prisma.orgs.update({ where: { id: data.id }, data });
    }
    async findById(id: number): Promise<Orgs | undefined> {
        return await prisma.orgs.findUnique({ where: { id } }) || undefined;
    }
    async findByEmail(email: string): Promise<Orgs | undefined> {
        const org = await prisma.orgs.findUnique({ where: { email } });
        if (!org) return undefined;
        return org;
    }
  async  findByName(organizationName: string): Promise<Orgs | undefined> {
        return await prisma.orgs.findFirst({ where: { organizationName } }) || undefined;
    }
    async findAll(): Promise<Orgs[]> {
       return await prisma.orgs.findMany() as Orgs[];
    }
}

export { OrgsRepository };
