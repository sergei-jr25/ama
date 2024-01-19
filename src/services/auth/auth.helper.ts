import Cookies from 'js-cookie'
import { IAuthResponse, ITokens } from '../../types/auth.interface'

export const saveTokenStorage = (data: ITokens) => {
	Cookies.set('accesToken', data.accessToken)
	Cookies.set('refreshToken', data.refreshToken)
}

export const authStorage = (data: IAuthResponse) => {
	console.log(data)

	saveTokenStorage(data.tokens)
	localStorage.setItem('user', JSON.stringify(data))
}

export const removeCookies = () => {
	Cookies.remove('accesToken')
	Cookies.remove('refreshToken')
}
