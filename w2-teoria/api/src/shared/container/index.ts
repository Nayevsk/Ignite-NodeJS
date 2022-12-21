import { container } from "tsyringe";

import { ICategoriesRepository } from "../../modules/car/repositories/ICategoriesRepository";
import { CategoriesRepository } from "../../modules/car/repositories/implementations/CategoriesRepository";
import { ISpecificationsRepository } from "../../modules/car/repositories/ISpecificationsRepository";
import { SpecificationRepository } from "../../modules/car/repositories/implementations/SpecificationsRepository";

// ICategoriesRepository + CategoriesRepository podem ser injetados em outras partes.
// Eh singleton pois se quer apenas umas instancia.
container.registerSingleton<ICategoriesRepository>("CategoriesRepository", CategoriesRepository);
container.registerSingleton<ISpecificationsRepository>("SpecificationRepository", SpecificationRepository);