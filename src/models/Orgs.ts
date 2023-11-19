
class Orgs{
    id?: number;
    organizationName: string;
    ownerName: string;
    email: string;
    password: string;
    address: string;
    phone: string;
    city: string;
    zipCode: string;
    latitude: string;
    longitude : string;
    createdAt?: Date;
    updatedAt?: Date;
    deletedAt?: Date;
    constructor(id: number, organizationName: string, email: string, password: string, address: string, city: string, zipCode: string, latitude: string, longitude: string, ownerName: string, phone: string, deletedAt?: Date, createdAt?: Date, updatedAt?: Date){
        this.id = id;
        this.organizationName = organizationName;
        this.email = email;
        this.password = password;
        this.city= city;
        this.zipCode = zipCode;
        this.latitude = latitude;
        this.longitude = longitude;
        this.ownerName = ownerName;
        this.phone = phone;
        this.address= address;

    }
}

export { Orgs };
