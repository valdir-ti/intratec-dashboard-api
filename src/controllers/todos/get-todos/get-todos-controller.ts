import { HttpResponse, IController } from "../../../controllers/protocols";
import { IGetTodosRepository } from "./protocols";
import { ITodo } from "../../../models/interfaces/ITodo";
import { ok, serverError } from "../../../controllers/helpers";

export class GetTodosController implements IController {

    constructor(private readonly getTodosRepository: IGetTodosRepository) {}

    async handle(): Promise<HttpResponse<ITodo[] | string>> {
        try {
            const todos = await this.getTodosRepository.getTodos()
            return ok<ITodo[]>(todos)
        } catch (error) {
            return serverError()
        }
    }

}
