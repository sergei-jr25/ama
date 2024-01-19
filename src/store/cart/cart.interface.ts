import { iOrderItem } from '@/types/order-item.interface'

export interface ICartInitinit {
	items: iOrderItem[]
}

export interface IPayloadAction extends Omit<iOrderItem, 'id'> {
	type?: string
}
