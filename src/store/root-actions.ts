import * as authActions from './auth/auth.actions'
import { actions as actionsCart } from './cart/cart.slice'
import { actions as actionsFilters } from './filters/filters.slice'

export const rootAtcions = {
	...authActions,
	...actionsFilters,
	...actionsCart,
}
