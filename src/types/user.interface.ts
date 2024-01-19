import { IProduct } from './product.interface'
import { IReview, IReviewUser } from './reviews.interface'

export interface IUser {
	id: number
	email: string
	name: string
	password: string
	avatarPath: string
	phone: string
	Order: string
	products: IProduct[]
	reviews: IReview[]
}

export interface IProfile {
	id: number
	email: string
	name: string
	products: IProduct[]
	reviews: IReviewUser[]
	avatarPath: string
}
