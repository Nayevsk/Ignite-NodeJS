"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
const CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(request, response) {
    CreateCourseService_1.default.execute({
        // Como cada atributo eh chamado individualmente, nao ha necessidade de se respeitar ordem de declaracao.
        name: "NodeJS",
        duration: 10,
        educator: "Dani"
    });
    return response.send();
}
exports.createCourse = createCourse;
