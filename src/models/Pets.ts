

class Pets {
    id?: string;
    name: string;
    about: string;
    age: string;
    size:string;
    energyLevel: string;
    independencyLevel: string;
    environment: string;
    orgId:number
    createdAt?: Date;
    updatedAt?: Date;
    constructor(name: string, age: string,size :string, energyLevel: string, independencyLevel: string, environment: string,  about: string,orgId:number) {
        this.name = name;
        this.age = age;
        this.orgId = orgId;
        this.size = size;
        this.energyLevel = energyLevel;
        this.independencyLevel = independencyLevel;
        this.environment = environment;
        this.about = about;
        
    }
}

export { Pets };
