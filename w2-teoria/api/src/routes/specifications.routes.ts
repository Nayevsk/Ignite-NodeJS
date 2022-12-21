import { Router } from "express";
import { CreateCategoryController } from "../modules/car/useCases/createCategory/CreateCategoryController";

import { CreateSpecificationController } from "../modules/car/useCases/createSpecification/CreateSpecificationController";

const specificationsRoutes = Router();

const createSpecificationController = new CreateSpecificationController()

specificationsRoutes.post("/", createSpecificationController.handle);

export { specificationsRoutes }