import { selectorFilters } from '@/store/selectors'

describe('filters selector', () => {
	it('should filtres selectors from state object initialState', () => {
		const initialState = {
			filters: {
				queryParams: {
					perPage: '1',
					page: '5',
				},
				isFilterUpdate: false,
			},
		}

		const resualt = selectorFilters(initialState)
		expect(resualt).toEqual(initialState.filters)
	})
	it('should filtres selectors from state object', () => {
		const initialState = {
			filters: {
				queryParams: {
					perPage: '1',
					page: '5',
					searchTerm: 'aboa',
					sort: '4',
					minPrice: '100',
					maxPrice: '1000',
					category: '1',
					ratings: '1',
				},
				isFilterUpdate: false,
			},
		}

		const resualt = selectorFilters(initialState)
		expect(resualt).toEqual(initialState.filters)
	})
})
