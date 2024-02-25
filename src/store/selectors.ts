import { IAuthInit } from './auth/auth.helper'
import { ICartInitinit } from './cart/cart.interface'
import { IFillter } from './filters/filters.interface'

interface IselectorsAuth {
	auth: IAuthInit
}
interface IselectorsCart {
	cart: ICartInitinit
}
interface IselectorsFilters {
	filters: IFillter
}

export const selectorsAuth = (state: IselectorsAuth) => state.auth
export const selectorCart = (state: IselectorsCart) => state.cart
export const selectorFilters = (state: IselectorsFilters) => state.filters
