"use strict";
/**
 * name -string
 * duration - number
 * educator - string
 */
Object.defineProperty(exports, "__esModule", { value: true });
class CreateCourseService {
    // Os atributos da classe Course poder ser declarados sem respeitar a ordem de chamada, ver em routes.
    execute({ duration, educator, name }) {
        console.log(name, duration, educator);
    }
    ;
}
exports.default = new CreateCourseService();
