import { HttpResponse } from './protocols'

export const ok = <T>(body: any): HttpResponse<T> => ({
	statusCode: 200,
	body,
})

export const created = <T>(body: any): HttpResponse<T> => ({
	statusCode: 201,
	body,
})

export const badRequest = (
	status: number,
	message: string,
): HttpResponse<string> => ({
	statusCode: status,
	body: message,
})
