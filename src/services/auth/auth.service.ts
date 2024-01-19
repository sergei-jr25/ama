import { IAuthResponse } from '@/types/auth.interface'
import Coockies from 'js-cookie'
import { getContentType } from '../../api/api.helper'
import { http } from '../../api/http'

export const userService = {
	async getAll() {
		const { data } = await http.get('/auth')

		return data
	},

	async login(email: string, password: string) {
		const response = await http.post<IAuthResponse>(`/auth/login`, {
			email,
			password,
		})

		return response
	},
	async register(email: string, password: string) {
		console.log(email, password)

		const response = await http.post<IAuthResponse>(`/auth/register`, {
			email,
			password,
		})

		return response
	},

	async update(id: string, email: string, name: string) {
		const { data } = await http.put(`/user/update-profile/${id}`, {
			email,
			name,
		})

		return data
	},

	async getTokens() {
		const refreshToken = Coockies.get('refreshToken')
		const { data } = await http.post(
			'/user/tokens',
			{ refreshToken },
			{ headers: getContentType() }
		)
		return data
	},

	async getProfile(id: number | undefined) {
		const { data } = await http.get(`/user/profile/${id}`)
		return data
	},
	async setFavorites(id: number | undefined, productId: number) {
		const { data } = await http.put(`/user/favorites/${id}`, { productId })
		return data
	},
}
