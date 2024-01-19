import { combineReducers } from '@reduxjs/toolkit'
import { authReducer } from './auth/auth.slice'
import { reducer as cartReducer } from './cart/cart.slice'
import { reducer as filtersReducer } from './filters/filters.slice'

export const rootReducers = combineReducers({
	auth: authReducer.reducer,
	filters: filtersReducer,
	cart: cartReducer,
})
