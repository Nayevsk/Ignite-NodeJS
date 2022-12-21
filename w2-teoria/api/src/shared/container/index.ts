import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/car/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/car/repositories/implementations/CategoriesRepository";

// ICategoriesRepository + CategoriesRepository podem ser injetados em outras partes.
container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);