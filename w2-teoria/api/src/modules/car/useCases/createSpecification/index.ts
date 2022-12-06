import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";
import { CreateSpecificationController } from "./CreateSpecificationController";
import { SpecificationRepository } from "../../repositories/implementations/SpecificationsRepository";

const specificationRepository = SpecificationRepository.getInstance();
const createSpecificationUseCase = new CreateSpecificationUseCase(specificationRepository)
const createSpecificationController = new CreateSpecificationController(createSpecificationUseCase)

export {createSpecificationController}