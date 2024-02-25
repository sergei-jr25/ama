import { selectorsAuth } from '@/store/selectors'

describe('redux selectors', () => {
	it('should auth selectors from state object empty', () => {
		const initialState = {
			auth: {
				user: null,
				acessToken: '',
				isLoading: false,
			},
		}

		const resault = selectorsAuth(initialState)

		expect(resault).toEqual(initialState.auth)
	})
	it('should auth selectors from state object', () => {
		const initialState = {
			auth: {
				user: { email: 'email', id: 1 },
				acessToken: 'accessToken',
				refreshToken: 'refreshToken',
				isLoading: false,
			},
		}

		const resault = selectorsAuth(initialState)

		expect(resault).toEqual(initialState.auth)
	})
})
