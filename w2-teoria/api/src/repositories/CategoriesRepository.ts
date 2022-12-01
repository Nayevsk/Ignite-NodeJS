import { Category } from "../model/category";

//DTO => Data Transfer Object (no caso cria uma interface para fazer transferencia de dados)
interface ICreateCategoryDTO {
  name:String;
  description: String;
}

class CategoriesRepository {
  private categories: Category[];

  constructor(){
    this.categories = [];
  }

  create({description,name} : ICreateCategoryDTO){    
    const category = new Category();

    Object.assign(category,{
      name,
      description,
      created_at:new Date()
    })
    
    this.categories.push(category);
  }

  list():Category[] {
    return this.categories;
  }

  findByName(name:String): Category {
    // : Category informa que essa funcao vai retornar um objeto do tipo Category.
    const category = this.categories.find(category => category.name === name);
    return category;
  }

}

export {CategoriesRepository};