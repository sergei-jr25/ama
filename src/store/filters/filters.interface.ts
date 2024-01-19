export interface IFillter {
	queryParams: IQueryParams
	isFilterUpdate: boolean
}

export interface IQueryParams {
	perPage?: string
	page: string
	searchTerm?: string
	sort?: string
	minPrice?: string
	maxPrice?: string
	category?: string
	ratings?: string
}

export interface IQueryParamsPayload {
	key: keyof IQueryParams
	value: string
}
