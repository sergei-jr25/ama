import { getLocalStorage } from '@/utils/local-storage'
import { createSlice } from '@reduxjs/toolkit'
import { logout, userLogin, userRegister } from './auth.actions'
import { IAuthInit } from './auth.helper'

const initialState: IAuthInit = {
	user: getLocalStorage('user'),
	acessToken: '',
	isLoading: false,
}

export const authReducer = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder.addCase(userRegister.pending, (state, { payload }) => {
			state.isLoading = true
		})
		builder.addCase(userRegister.fulfilled, (state, { payload }) => {
			state.user = payload
			state.acessToken = payload.tokens.accessToken
			state.isLoading = false
		})
		builder.addCase(userRegister.rejected, (state, { payload }) => {
			state.user = null
			state.acessToken = ''
			state.isLoading = false
		})
		builder.addCase(userLogin.pending, (state, { payload }) => {
			state.isLoading = true
		})
		builder.addCase(userLogin.fulfilled, (state, { payload }) => {
			state.user = payload
			state.acessToken = payload.tokens.accessToken
			state.isLoading = false
		})
		builder.addCase(userLogin.rejected, (state, { payload }) => {
			state.user = null
			state.acessToken = ''
			state.isLoading = false
		})
		builder.addCase(logout.fulfilled, (state, { payload }) => {
			state.user = null
			state.acessToken = ''
			state.isLoading = false
		})
	},
})
