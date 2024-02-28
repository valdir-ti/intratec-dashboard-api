export interface IProduct {
	title: string
	description: string
	price: number
	stock: number
	size: number
	category: string
	isActive: boolean
	createdAt: string
	image: string
}

export interface IProductResponse {
	products: IProduct[]
	count: number
}
