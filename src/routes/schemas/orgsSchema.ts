const orgObjectSchema = {
    type: 'object',
    properties: {
        id: { type: 'number' },
        organizationName: { type: 'string' },
        ownerName: { type: 'string' },
        email: { type: 'number' },
        city: { type: 'number' },
        phone: { type: 'number' },
        latitude: { type: 'string' },
        longitude: { type: 'string' },
        zipCode: { type: 'string' },
        createdAt: { type: 'string' },
        updatedAt: { type: 'string' },
        },
    }

export const orgsSchema = {
    type: 'object',
    properties: {
        organizationName: { type: 'string' },
        ownerName: { type: 'string' },
        email: {type:'string'},
        password: { type: 'string' },
        phone: { type: 'string' },
        address: { type: 'string' },
        city: { type: 'string' },
        latitude: { type: 'string' },
        longitude: { type: 'string' },
        zipCode: { type: 'string' },
    },
};

export const responseOrgs = {
    200: orgObjectSchema,

    400: {
        type: 'object',
        properties: {
            message: { type: 'string' },
        },
        example: {
            message: 'Resource not exists',
        },
    },
};

