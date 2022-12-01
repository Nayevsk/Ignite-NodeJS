import { CategoriesRepository } from "../repositories/CategoriesRepository";

interface IRequest {
  name:String,
  description:String;
}

class CreateCategoryService {
  constructor(private categoriesRepository: CategoriesRepository){}

  execute({description,name}:IRequest):void {
  const categoryAlreadyExists = this.categoriesRepository.findByName(name);

  if( categoryAlreadyExists ) {
    throw new Error("Category ALready Exists")
  }

  this.categoriesRepository.create({name,description})
  }
}

export {CreateCategoryService}