import { IProduct } from '@/types/product.interface'

export interface IProductItem {
	product: IProduct
	hanleClick?: (id: string | number) => void
}
