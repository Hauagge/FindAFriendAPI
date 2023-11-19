import { IFilterPEts } from "@/DTOS/IFilterPets";
import { Pets } from "@/models/Pets";


export interface IPetsRepository {
    create(data: Pets): Promise<Pets>;
    findById(id: string): Promise<Pets | undefined>;
    filter(data: IFilterPEts): Promise<Pets[] >;
    findAll(): Promise<Pets[]>;
}

