import { Requirements } from "@/models/Requeriments";


interface IRequirementsRepository {
    create(requirement: Requirements): Promise<Requirements>;
    list(): Promise<Requirements[]>;
    findById(id: string): Promise<Requirements | undefined>;
    delete(id: string): Promise<void>;
    update(requirement: Requirements): Promise<void>;
    findByDescription(description: string): Promise<Requirements | undefined>;
}

export { IRequirementsRepository };

