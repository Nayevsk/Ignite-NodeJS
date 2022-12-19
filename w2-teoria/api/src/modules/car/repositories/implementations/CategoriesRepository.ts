import { getRepository, Repository } from "typeorm";

import { Category } from "../../entities/category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
 
  //   public static getInstance(): CategoriesRepository {
  //      Estrutura Singleton
  //    if (!CategoriesRepository.INSTANCE) {
  //      CategoriesRepository.INSTANCE = new CategoriesRepository();
  //    }
  //   return CategoriesRepository.INSTANCE;
  // }

  private repository: Repository<Category>;

  constructor() {
    this.repository = getRepository(Category);
  }

  async create({ description, name }: ICreateCategoryDTO): Promise<void> {
    const category = this.repository.create({
      name,
      description,
    });

    await this.repository.save(category)
  }

  async list(): Promise<Category[]>{
    const categories = await this.repository.find()
    return categories;
  }

  async findByName(name: String): Promise<Category> {
    // Select * from categories where(usar "{}")  name = "name" limit 1.
    const category = await this.repository.findOne({name})
    return category;
  }

}

export { CategoriesRepository };