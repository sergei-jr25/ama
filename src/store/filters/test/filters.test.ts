import { queryParams } from '@/store/filters/filters.data'
import { actions, reducer } from '../filters.slice'

describe('use actions', () => {
	const initialState = {
		queryParams: { page: '3', perPage: '5' },
		isFilterUpdate: true,
	}

	it('actions update ', () => {
		const newState = reducer(
			initialState,
			actions.updateQueryParams({ key: 'page', value: '2' })
		)
		expect(newState.queryParams).toEqual({ page: '2', perPage: '5' })
		expect(newState.isFilterUpdate).toEqual(true)
	})
	it('actions resetFilter', () => {
		const newState = reducer(initialState, actions.resetFilter())
		expect(newState.queryParams).toEqual(queryParams)
		expect(newState.isFilterUpdate).toEqual(false)
	})
})
