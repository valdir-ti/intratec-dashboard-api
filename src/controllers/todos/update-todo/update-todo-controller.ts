import { HttpRequest, HttpResponse, IController } from "../../../controllers/protocols";
import { IUpdateTodoRepository, UpdateTodoParam } from "./protocols";
import { badRequest, ok, serverError } from "../../../controllers/helpers";
import { ITodo } from "../../../models/interfaces/ITodo";

export class UpdateTodoController implements IController {
    constructor(private readonly updateTodoRepository: IUpdateTodoRepository) {}
    async handle(httpRequest: HttpRequest<UpdateTodoParam>): Promise<HttpResponse<ITodo | string>> {
        try {
            const id = httpRequest.params?.id

			if (!id) {
				return badRequest('Please specify an id')
			}

            const todo = await this.updateTodoRepository.updateTodo(id)

			return ok<ITodo>(todo)
        } catch (error) {
            return serverError()
        }
    }
}
