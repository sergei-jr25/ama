import { IProduct } from './product.interface'

export interface ICategory {
	id: number
	slug: string
	name: string
	Product?: IProduct
}
