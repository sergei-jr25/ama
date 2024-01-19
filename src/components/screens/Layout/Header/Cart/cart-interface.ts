export interface ICart {
	id: number
	name: string
	isExsist?: boolean
	price: number
	description?: string
	image: string[]
	isFetching?: boolean
}
