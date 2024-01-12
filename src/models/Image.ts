

class ImagePet {
    id?: string;
    url: string;
    petId: string;
    constructor( url: string, petId: string) {
        this.url = url;
        this.petId = petId;
    }
}

export { ImagePet };
