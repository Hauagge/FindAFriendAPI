class Requirements {
    id?: string;
    description: string;
    created_at?: Date;
    updated_at?: Date;
    constructor(description:string, petId: string, ) {
       
            this.description= description;
    }
          
    
}

export { Requirements };
