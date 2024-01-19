// export async function getContentType() {
// 	return {
// 		'Content-Type': 'application/json',
// 		'Access-Control-Allow-Origin': '*',
// 	}
// }

export const getContentType = () => ({
	'Content-Type': 'application/json',
	'Access-Control-Allow-Origin': '*',
})

export const catchError = (error: any) => {
	return error.response && error.response.data
		? typeof error.response.data === 'object'
			? error.response.data.message
			: error.response.data
		: error.message
}

export const toastError = (error: any, title = 'Error request') => {
	const message = catchError(error)

	toastr.error(title, message)
	throw message
}
