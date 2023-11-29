export interface HttpResponse<T> {
	statusCode: number
	body: T
}

export interface HttpRequest<B> {
	params?: any
	headers?: any
	body?: B
}

export enum HttpStatusCode {
	OK = 200,
	BAD_REQUEST = 400,
	SERVER_ERROR = 500,
	CREATED = 201,
}

export interface IController {
	handle(httpRequest: HttpRequest<unknown>): Promise<HttpResponse<unknown>>
}
