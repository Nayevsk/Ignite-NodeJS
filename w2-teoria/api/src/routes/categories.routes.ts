import { Router } from "express";
import { CategoriesRepository } from "../modules/car/repositories/CategoriesRepository";
import { CreateCategoryService } from "../modules/car/services/CreateCategoryService";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;

  const createCategoryService = new CreateCategoryService(categoriesRepository)

  createCategoryService.execute({ name, description })

  return response.status(201).send();
});

categoriesRoutes.get("/", (request, response) => {
  const categoriesList = categoriesRepository.list()
  return response.json(categoriesList)
})

export { categoriesRoutes }