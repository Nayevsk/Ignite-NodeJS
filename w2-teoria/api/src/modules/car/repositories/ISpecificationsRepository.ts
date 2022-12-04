import { Specification } from "../model/Specification";

interface ICreateSpesificationDTO{
  name:String;
  description:String;
}

interface ISpecificationsRepository {
  create({name,description}:ICreateSpesificationDTO):void; 
  list(): Specification [];
  findByName(name:String):Specification;
}

export {ISpecificationsRepository, ICreateSpesificationDTO}