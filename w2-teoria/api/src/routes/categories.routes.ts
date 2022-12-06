import { Router } from "express";

import { CategoriesRepository } from "../modules/car/repositories/CategoriesRepository";
import { createCategoryController } from "../modules/car/useCases/createCategory" 


const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request,response)
});

categoriesRoutes.get("/", (request, response) => {
  const categoriesList = categoriesRepository.list()
  return response.json(categoriesList)
})

export { categoriesRoutes }