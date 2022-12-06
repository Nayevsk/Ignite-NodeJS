import {Request,Response} from "express";
import {ListCategoriesUseCase} from "./ListCategoriesUseCase"

class ListCategoriesController {

  constructor(private listCategoriesUseCase: ListCategoriesUseCase){}

  handle(request:Request, response:Response): Response {
    // aqui coloca tudo q havia dentro da route .get
    const all = this.listCategoriesUseCase.execute();
    
    return response.json(all)
  }
}

export {ListCategoriesController}