import { ImagePet } from "@/models/Image";

interface IImageRepository {
    save(image: ImagePet): Promise<ImagePet>;
 
}

export { IImageRepository };
