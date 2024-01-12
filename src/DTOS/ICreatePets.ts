import { Pets } from "@/models/Pets";
import { IFilename } from "./IFileName";

export interface ICreatePets extends Pets{
    requirements?: string[];
    images?: IFilename[];
}