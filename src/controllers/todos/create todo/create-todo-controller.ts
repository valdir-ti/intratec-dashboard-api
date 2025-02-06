import { ITodo } from "../../../models/interfaces/ITodo";
import { HttpRequest, HttpResponse, IController } from "../../protocols";
import { CreateTodoParams, ICreateTodoRepository } from "./protocols";
import { badRequest, created, serverError } from "../../helpers";

export class CreateTodoController implements IController {

    constructor(private readonly createTodoRepository: ICreateTodoRepository){}

    async handle(httpRequest: HttpRequest<CreateTodoParams>): Promise<HttpResponse<ITodo | string>> {
        try {
            const { body } = httpRequest

            if (!body) {
				return badRequest('Please specify a body')
			}

            const { title, description } = body

            if (!title) {
				return badRequest('Please specify a title field')
			}

            if (!description) {
				return badRequest('Please specify a description field')
			}

            try {
                const todo =
                    await this.createTodoRepository.createTodo(body)

                return created<ITodo>(todo)
            } catch (error) {
                return badRequest('Fails to create a todo')
            }

        } catch (error) {
            return serverError()
        }
    }

}
