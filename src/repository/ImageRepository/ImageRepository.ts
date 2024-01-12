import prisma from "@/db/prismaClient";
import { ImagePet } from "@/models/Image";
import { IImageRepository } from "./IImageRepository";

class ImageRepository implements IImageRepository{
    async save(image: ImagePet): Promise<ImagePet> {
       return await prisma.imagesPet.create({
              data: image
         });
    }
   
    
}
export { ImageRepository };
