import { toastrError } from '@/utils/toastr-error'
import { createAsyncThunk } from '@reduxjs/toolkit'
import toastr from 'toastr'
import { authStorage, removeCookies } from '../../services/auth/auth.helper'
import { userService } from '../../services/auth/auth.service'
import { IAuthField, IAuthResponse } from '../../types/auth.interface'

export const userRegister = createAsyncThunk<IAuthResponse, IAuthField>(
	'users/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await userService.register(email, password)
			console.log(response)

			if (response.data.tokens.accessToken) {
				authStorage(response.data)
			}
			toastr.success('Вход успешно выполнен')

			return response.data
		} catch (error) {
			toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)

export const userLogin = createAsyncThunk<IAuthResponse, IAuthField>(
	'users/login',
	async ({ email, password }, thunkApi) => {
		console.log('login')

		try {
			const response = await userService.login(email, password)
			console.log(response)
			if (response.data.tokens.accessToken) {
				authStorage(response.data)
			}
			toastr.success('Вход успешно выполнен')
			return response.data
		} catch (error) {
			toastrError(error)
			return thunkApi.rejectWithValue(error)
		}
	}
)
export const logout = createAsyncThunk('users/logout', async (_, thunkApi) => {
	removeCookies()
	localStorage.removeItem('user')
})
