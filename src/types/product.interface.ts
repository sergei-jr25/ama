import { ICategory } from './category.interface'
import { iOrderItem } from './order-item.interface'
import { IReview } from './reviews.interface'
import { IUser } from './user.interface'

export interface IProduct {
	id: number
	description: string
	isExsist: boolean
	userId: number
	categoryId: number
	price: number
	slug: string

	image: string[]
	name: string
	searchTerm: string
	orderItem?: iOrderItem
	category?: ICategory
	user?: IUser
	reviews?: IReview
}

export interface IProducts {
	products: IProduct[]
	lenght: number
}
