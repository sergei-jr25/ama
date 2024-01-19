import { IProduct } from './product.interface'

export interface iOrderItem {
	id: number

	quantity: number
	price: number
	product: IProduct
}
