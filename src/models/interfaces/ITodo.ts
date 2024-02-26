export interface ITodo {
	description: string
	done: boolean
	createdAt: string
}


export interface ITodoResponse {
	todos: ITodo[]
    count: number
}
