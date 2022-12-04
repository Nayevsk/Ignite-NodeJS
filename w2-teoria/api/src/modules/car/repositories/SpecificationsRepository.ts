import { Specification } from "../model/Specification";
import { ISpecificationsRepository, ICreateSpesificationDTO } from "./ISpecificationsRepository";


class SpecificationRepository implements ISpecificationsRepository {

  private specifications: Specification [];

  constructor(){
    this.specifications = [];
  }

  create({ name, description }: ICreateSpesificationDTO): void {
    const specification = new Specification()
    Object.assign(specification,{
      name,
      description,
      created_at: new Date(),
    })

    this.specifications.push(specification);

  }
  list(): Specification[] {
    throw new Error("Method not implemented.");
  }
  findByName(name: String): Specification {
    const specification = this.specifications.find(specification => specification.name === name );
    return specification;    
  }
}

export {SpecificationRepository}