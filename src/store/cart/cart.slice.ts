import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { ICartInitinit, IPayloadAction } from './cart.interface'

const initialState: ICartInitinit = {
	items: [],
}

const cartActions = createSlice({
	name: 'cart',
	initialState,
	reducers: {
		addToCart: (state, { payload }: PayloadAction<IPayloadAction>) => {
			const isExsist = state.items.some(
				item => item.product.id === payload.product.id
			)

			if (!isExsist) {
				state.items.push({ ...payload, id: state.items.length })
			}
		},

		removeToCart: (state, { payload }: PayloadAction<{ id: number }>) => {
			state.items = state.items.filter(item => item.id !== payload.id)
		},

		changeToCart: (state, { payload }: PayloadAction<IPayloadAction>) => {
			const item = state.items.find(item => item.id === payload.product.id)

			if (item) payload.type === 'plus' ? item.quantity++ : item.quantity--
		},

		reset: (state, { payload }) => {
			state.items = []
		},
	},
})

export const { actions, reducer } = cartActions
