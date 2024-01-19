import { TypeSelector } from './useTypedSelector'

export const useCart = () => TypeSelector(state => state.cart)
