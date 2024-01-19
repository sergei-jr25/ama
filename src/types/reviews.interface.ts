import { IProduct } from './product.interface'
import { IUser } from './user.interface'

export interface IReview {
	id: number
	count: number
	productId?: number
	userId: number
	text: string
	updatedAt: number
	product: IProduct
	user: IUser
}

export interface IReviewUser {
	id: number
	text: string
	createdAt: number
	updatedAt: number
	rating: number
}
