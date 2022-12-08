import { User } from "../../model/User";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  user_id: string;
}

class ListAllUsersUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ user_id }: IRequest): User[] {
    const userAlreadyExists = this.usersRepository.findById(user_id);
    // O que esta errado ao user letusers?
    let users: User[] = [];

    if (userAlreadyExists) {
      throw new Error("User Already Exists");
    }
    if (userAlreadyExists.admin === false) {
      throw new Error("Access denied");
    } else {
      users = this.usersRepository.list();
      // Porque users tem q ficar dentro do else??
    }
    return users;
  }
}

export { ListAllUsersUseCase };
