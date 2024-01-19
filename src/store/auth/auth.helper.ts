export interface IAuthInit {
	user: {
		email: string

		id: number
	} | null
	acessToken: string
	isLoading?: boolean
}
