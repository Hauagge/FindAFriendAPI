import { Requirements } from "@/models/Requeriments";


interface IRequirementsRepository {
    create(requirement: Requirements): Promise<Requirements>;
    list(): Promise<Requirements[]>;
    findById(id: string): Promise<Requirements | undefined>;
    findByDescription(description: string): Promise<Requirements | undefined>;
}

export { IRequirementsRepository };

