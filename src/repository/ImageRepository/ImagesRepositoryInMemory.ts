import { ImagePet } from "@/models/Image";
import { IImageRepository } from "./IImageRepository";



class ImageRepositoryInMemory implements IImageRepository {
    private images: ImagePet[] = [];
    async save(image: ImagePet): Promise<ImagePet> {
        this.images.push(image);
        return image;
    }
}

export { ImageRepositoryInMemory };
