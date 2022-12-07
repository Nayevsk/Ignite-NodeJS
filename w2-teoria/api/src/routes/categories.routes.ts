import { response, Router } from "express";
import multer from "multer";

import { createCategoryController } from "../modules/car/useCases/createCategory";
import { listCategoriesController } from "../modules/car/useCases/listCategories"
import { importCategoryController } from "../modules/car/useCases/importCategory";

const categoriesRoutes = Router();

const upload = multer({
  dest: "./tmp"
});

categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response)
});

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
})

// .single usado para receber apenas um arquivo por vez, multer funciona como um middleware.
categoriesRoutes.post("/file", upload.single("file"), (request,response) => {
  return importCategoryController.handle(request,response);
})

export { categoriesRoutes }