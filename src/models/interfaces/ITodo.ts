export interface ITodo {
	description: string
	done: boolean
	createdAt: string
}

export interface ITodoResponse {
	data: ITodo[]
	count: number
}
