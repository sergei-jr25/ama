import { IProduct } from '@/types/product.interface'
import { IReviewUser } from '@/types/reviews.interface'

export interface IInfo {
	profile?: {
		email: string
		avatarPath: string
		name: string
		reviews: IReviewUser[]
		products: IProduct[]
	}
}
