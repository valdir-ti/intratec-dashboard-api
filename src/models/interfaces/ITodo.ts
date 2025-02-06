export interface ITodo {
    title: string
	description: string
	done: boolean
	createdAt: string
}

export interface ITodoResponse {
	data: ITodo[]
	count: number
    totalDone: number
    totalOpen: number
}
