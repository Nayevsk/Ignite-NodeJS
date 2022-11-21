import {Request,Response} from 'express'
import CreateCourseService from './CreateCourseService'

export function createCourse(request:Request,response:Response) {
  CreateCourseService.execute({
    // Como cada atributo eh chamado individualmente, nao ha necessidade de se respeitar ordem de declaracao.
    name:"NodeJS",
    duration: 10,
    educator:"Dani"});

  return response.send()
}