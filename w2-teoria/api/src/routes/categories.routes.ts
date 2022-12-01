import { Router } from "express";
import { CategoriesRepository } from "../repositories/categoriesRepository";

const categoriesRoutes = Router();
const categoriesRepository = new CategoriesRepository();

categoriesRoutes.post("/", (request, response) => {
  const { name, description } = request.body;
  const categoryAlreadyExists = categoriesRepository.findByName(name);

  if( categoryAlreadyExists ) {
    return response.status(400).json({error:"Category already exists!"})
  }

  categoriesRepository.create({name,description})
  
  return response.status(201).send();
});

categoriesRoutes.get("/", (request,response)=>{
  const categoriesList = categoriesRepository.list()
  return response.json(categoriesList)
})

export { categoriesRoutes }