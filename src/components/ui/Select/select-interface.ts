export interface ISelectOption {
	value: string
	label?: string
}

export interface ISelect {
	options: ISelectOption[]
	onSelect: (option: ISelectOption | null) => void
}

export enum EnumProductSort {
	HIGHT_PRICE = 'high-price',
	LOW_PRICE = 'low_price',
	NEWEST = 'newes',
	OLSEST = 'oldest',
}
