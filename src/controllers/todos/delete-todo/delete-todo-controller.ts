import { HttpRequest, HttpResponse, IController } from "../../../controllers/protocols";
import { DeleteTodoParam, IDeleteTodoRepository } from "./protocols";
import { ITodo } from "../../../models/interfaces/ITodo";
import { badRequest, ok, serverError } from "../../../controllers/helpers";

export class DeleteTodoController implements IController {

    constructor(private readonly deleteTodoRepository: IDeleteTodoRepository) {}

    async handle(httpRequest: HttpRequest<DeleteTodoParam>): Promise<HttpResponse<ITodo | string>> {
        try {
            const id = httpRequest.params.id

            if(!id) {
                return badRequest("Please specify an id")
            }

            const todo = await this.deleteTodoRepository.deleteTodo(id)

            return ok<ITodo>(todo)

        } catch (error) {
            return serverError()
        }
    }

}
