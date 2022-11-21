/**
 * name -string
 * duration - number
 * educator - string
 */

// Interface eh criada para melhorar a organizacao do codigo.
interface Course {
  name: string;
  educator: string;
  duration: number;
}

class CreateCourseService {
  // Os atributos da classe Course poder ser declarados sem respeitar a ordem de chamada, ver em routes.
    execute({duration, educator, name}: Course) {
    console.log(name,duration,educator);
  };
}

export default new CreateCourseService();