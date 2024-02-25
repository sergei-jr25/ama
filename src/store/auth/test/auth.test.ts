import { logout, userLogin, userRegister } from '../auth.actions'

describe('auth extra reducer', () => {
	// ================================ userRegister ======================

	it('userRegister dispatch pending action on registration', async () => {
		const fakeUserData = { email: 'test@example.com', password: 'password' }

		const pendingAction = userRegister.pending(fakeUserData)
		const dispatch = jest.fn()
		await dispatch(pendingAction)

		expect(dispatch).toHaveBeenCalledWith(pendingAction)
		expect(dispatch.mock.calls[0][0].type).toBe('users/register/pending')

		expect(dispatch.mock.calls[0][0].meta.requestStatus).toBe('pending')
	})

	it('userRegister dispatch fulfilled action on successful registration', async () => {
		const fakeUserData = { email: 'test@example.com', password: 'password' }
		const fakeResponseData = { tokens: { accessToken: 'fakeAccessToken' } }
		const fakeResponse = { data: fakeResponseData }

		// Подготовка моков
		const userService = {
			register: jest.fn().mockResolvedValue(fakeResponse),
		}

		await userService.register(fakeUserData.email, fakeUserData.password)

		// Проверка вызова функции с ожидаемыми аргументами
		// Выполнение экстра редюсера
		const dispatch = jest.fn()
		const fulfilledAction = userRegister.fulfilled(fakeUserData)
		await dispatch(fulfilledAction)

		// await userRegister(fakeUserData)(dispatch, () => {})

		// Проверка вызова сервиса и обработки успешного выполнения

		expect(userService.register).toHaveBeenCalledWith(
			fakeUserData.email,
			fakeUserData.password
		)

		// expect(thunkApi.rejectWithValue).not.toHaveBeenCalled()
		// Ожидаемый вызов fulfilled action
		// expect(dispatch).toHaveBeenCalledWith(
		// 	userRegister.fulfilled(fakeResponseData)
		// )

		expect(dispatch).toHaveBeenCalledWith(fulfilledAction)
		// expect(dispatch.mock.calls[0][0].type).toBe('users/register/pedning')
		expect(dispatch.mock.calls[0][0].type).toBe('users/register/fulfilled')
		expect(dispatch.mock.calls[0][0].payload).toEqual(fakeUserData)

		expect(dispatch.mock.calls[0][0].payload).toBe(fakeUserData)
	})

	it('userRegister dispatch rejectValue action registration', async () => {
		const error = new Error('Registration failed')

		const rejectAction = userRegister.rejected(error)
		const dispatch = jest.fn()
		await dispatch(rejectAction)

		expect(dispatch).toHaveBeenCalledWith(rejectAction)
		expect(dispatch.mock.calls[0][0].type).toBe('users/register/rejected')
		expect(dispatch.mock.calls[0][0].error.message).toEqual(
			'Registration failed'
		)
		expect(dispatch.mock.calls[0][0].meta.requestStatus).toBe('rejected')
	})

	// ================================ UserLogin ======================

	it('userLogin dispatch pending action on registration', async () => {
		const fakeUserData = { email: 'test@example.com', password: 'password' }

		const pendingAction = userLogin.pending(fakeUserData)

		const dispatch = jest.fn()
		await dispatch(pendingAction)

		expect(dispatch).toHaveBeenCalledWith(pendingAction)
		expect(dispatch.mock.calls[0][0].type).toBe('users/login/pending')
		expect(dispatch.mock.calls[0][0].meta.requestStatus).toBe('pending')
	})
	it('userLogin dispatch fulfilled action on registration', async () => {
		const fakeUserData = { email: 'test@example.com', password: 'password' }
		const fakeResponseData = { tokens: { accesToken: 'accessoToken' } }
		const fakseResponse = { data: fakeResponseData }

		const userService = {
			register: jest.fn().mockResolvedValue(fakseResponse),
		}
		await userService.register(fakeUserData.email, fakeUserData.password)

		const fulfilledAction = userLogin.fulfilled(fakeUserData)

		const dispatch = jest.fn()
		dispatch(fulfilledAction)
		expect(userService.register).toHaveBeenCalledWith(
			fakeUserData.email,
			fakeUserData.password
		)
		expect(dispatch).toHaveBeenCalledWith(fulfilledAction)
		expect(dispatch.mock.calls[0][0].type).toBe('users/login/fulfilled')
		expect(dispatch.mock.calls[0][0].payload).toEqual(fakeUserData)
		expect(dispatch.mock.calls[0][0].meta.requestStatus).toBe('fulfilled')
	})
	it('userLogin dispatch rejectValue action on registration', async () => {
		const error = new Error('Login field')

		const rejectAction = userLogin.rejected(error)
		const dispatch = jest.fn()
		await dispatch(rejectAction)

		expect(dispatch).toHaveBeenCalledWith(rejectAction)
		expect(dispatch.mock.calls[0][0].type).toBe('users/login/rejected')
		expect(dispatch.mock.calls[0][0].error.message).toEqual('Login field')

		expect(dispatch.mock.calls[0][0].meta.requestStatus).toBe('rejected')
	})

	// ================================ Logout ======================

	it('logout dispatch fulfilled action on registration', async () => {
		const fulfilledAction = logout.fulfilled()
		const dispatch = jest.fn()
		await dispatch(fulfilledAction)

		expect(dispatch).toHaveBeenCalledWith(fulfilledAction)
		expect(dispatch.mock.calls[0][0].type).toBe('users/logout/fulfilled')
		expect(dispatch.mock.calls[0][0].meta.requestStatus).toBe('fulfilled')
	})
})
