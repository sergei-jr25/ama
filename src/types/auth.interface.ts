export interface IAuthField {
	email: string
	password: string
}
export interface ITokens {
	accessToken: string
	refreshToken: string
}

export interface IAuth {
	user: IAuthField | null
	tokens: ITokens
	isLoading?: boolean
}
export interface IAuthResponse {
	email: string

	id: number

	tokens: ITokens
}
