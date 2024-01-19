import axios from 'axios'
import Cookies from 'js-cookie'
import { removeCookies } from '../services/auth/auth.helper'
import { userService } from '../services/auth/auth.service'
import { catchError, getContentType } from './api.helper'

export const http = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_APP_URL}`,
	headers: getContentType(),
})
export const instance = axios.create({
	baseURL: `${process.env.NEXT_PUBLIC_APP_URL}`,
	headers: getContentType(),
})

instance.interceptors.request.use(config => {
	const accessToken = Cookies.get('accesToken')

	if (config.headers && accessToken) {
		config.headers.Authorization = `Bearer ${accessToken}`
	}

	return config
})

instance.interceptors.response.use(
	config => config,
	async error => {
		const originalRequest = error.config

		if (
			(error.response.status === 401 ||
				catchError(error) === 'jwt expired' ||
				catchError(error) === 'jwt must be provided') &&
			error.config &&
			!error.config._isRetry
		)
			originalRequest._isRetry = true

		try {
			await userService.getTokens()
			instance.request(originalRequest)
		} catch (error) {
			catchError(error) === 'jwt expired' && removeCookies()
		}

		throw error
	}
)
