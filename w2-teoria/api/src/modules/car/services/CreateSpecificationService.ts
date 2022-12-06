import { ISpecificationsRepository } from "../repositories/ISpecificationsRepository";

interface IRequest {
  name:String;
  description:String;
}

class CreateSpecificationService {
  constructor(private specificationRespository:ISpecificationsRepository){}
  
  execute({name,description}:IRequest):void{    
    const specificationAlreadyExists = this.specificationRespository.findByName(name);

    if (specificationAlreadyExists){
      throw new Error ("Specification Already Exists")
    }

    this.specificationRespository.create({
      name,
      description
    });
  }
}

export {CreateSpecificationService}