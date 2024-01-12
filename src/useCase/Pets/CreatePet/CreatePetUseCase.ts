import upload from '@/@config/upload';
import { ICreatePets } from '@/DTOS/ICreatePets';
import { IImageRepository } from '@/repository/ImageRepository/IImageRepository';
import { IPetsRepository } from '@/repository/PetsRepositories/IPetsRepository';
import { IPetsRequirementsRepository } from '@/repository/PetsRequirementsRepository/IPetsRequirementsRepository';
import { IRequirementsRepository } from '@/repository/RequirementsRepositories/IRequirementsRepository';

class CreatePetsUseCase {
  constructor(
    private petsRepository: IPetsRepository,
    private requirementsRepository: IRequirementsRepository,
    private petsRequirementsRepository: IPetsRequirementsRepository,
    private imagesRepository: IImageRepository
  ) {}

  async execute(data: ICreatePets): Promise<any> {
    const pet = await this.petsRepository.create(data);
    if (data.requirements?.length) {
      const requirementDescription = await Promise.all( data.requirements.map(
        async (requirement) => {
          let requirementRegistered = await this.requirementsRepository.findByDescription(requirement);
      
          if(!requirementRegistered){
            requirementRegistered = await this.requirementsRepository.create({
              description: requirement,
            });
          }
          await this.petsRequirementsRepository.create({
            petId: pet.id as string,
            requirementsId: requirementRegistered.id as string,
          })
          return requirementRegistered;
        }

       
      ));
      Object.assign(pet, { ...pet, requirements: requirementDescription });
    }

    if (data.images?.length) {

      const images = await Promise.all( data.images.map(async (image) => {
       return await this.imagesRepository.save({
          url: `${upload.directory}/${image.filename}`,
          petId: pet.id as string,
        });
      }));
      Object.assign(pet, { ...pet, images: images });
    }

    return pet;
  }
}

export { CreatePetsUseCase };
