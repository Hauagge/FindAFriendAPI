

export const petsSchema = {
    type: 'object',
    properties: {
        name: { type: 'string' },
        age: { type: 'string' },
        breed: { type: 'string' },
        weight: { type: 'number' },
        height: { type: 'number' },
        color: { type: 'string' },
        description: { type: 'string' },
        orgId: { type: 'number' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
    },
};




export const responsePets = {
    201: {
        type: 'object',
        properties: {
            id: { type: 'string' },
            name: { type: 'string' },
            about: { type: 'string' },
            age: { type: 'string' },
            size: { type: 'string' },
            energyLevel: { type: 'string' },
            environment: { type: 'string' },
            independencyLevel: { type: 'string' },
            orgId: { type: 'number' },
            requirements: { 
                type: 'array', 
                items: { 
                    type: 'object',
                properties: { 
                    id: { type: 'string' }, 
                    description: { type: 'string' },
                    createdAt: { type: 'string' },
                    updatedAt: { type: 'string' },
                },
            },
        },
            images:{
                type: 'array', 
                items: { 
                    type: 'object',
                    properties: { 
                        id: { type: 'string' }, 
                        url: { type: 'string' },
                        petId: { type: 'string' },
                        createdAt: { type: 'string' },
                        updatedAt: { type: 'string' },
                        deletedAt: { type: 'string' },
                },
            },
           
            },
            createdAt: { type: 'string' },
            updatedAt: { type: 'string' },
            },
        
    }
};