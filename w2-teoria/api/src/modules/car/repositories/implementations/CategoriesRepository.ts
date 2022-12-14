import { Category } from "../../entities/category";
import { ICategoriesRepository, ICreateCategoryDTO } from "../ICategoriesRepository";

class CategoriesRepository implements ICategoriesRepository {
  // Padrao Singleton: Evita a criacao de varias instancias da msma classe (evitando q categories array seja criado sempre que algum request seja feito). logica utilizada no metodo getInstance

  private categories: Category[];

  private static INSTANCE: CategoriesRepository;

  private constructor() {
    this.categories = [];
  }

  public static getInstance(): CategoriesRepository {
    // Estrutura Singleton
    if (!CategoriesRepository.INSTANCE) {
      CategoriesRepository.INSTANCE = new CategoriesRepository();
    }
    return CategoriesRepository.INSTANCE;
  }

  create({ description, name }: ICreateCategoryDTO) {
    const category = new Category();

    Object.assign(category, {
      name,
      description,
      created_at: new Date()
    })

    this.categories.push(category);
  }

  list(): Category[] {
    return this.categories;
  }

  findByName(name: String): Category {
    // : Category informa que essa funcao vai retornar um objeto do tipo Category.
    const category = this.categories.find(category => category.name === name);
    return category;
  }

}

export { CategoriesRepository };