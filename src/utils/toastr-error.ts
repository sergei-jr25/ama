import { catchError } from '@/api/api.helper'
import toastr from 'toastr'

export const toastrError = (error: any, title?: string) => {
	const message = catchError(error)
	console.log(message, 'message')

	console.log(error.response.data.message)

	toastr.error(message, title || 'Error')
	throw message
}
