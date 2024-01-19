import { iOrderItem } from './order-item.interface'
import { IUser } from './user.interface'

export interface IOrder {
	id: number
	status: string
	UserId?: number
	user: IUser
	items: iOrderItem
	total: number
}
