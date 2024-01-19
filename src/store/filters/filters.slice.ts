import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { queryParams } from './filters.data'
import { IFillter, IQueryParamsPayload } from './filters.interface'

const initialState: IFillter = {
	isFilterUpdate: false,
	queryParams,
}

const filterSlice = createSlice({
	name: 'filters',
	initialState,
	reducers: {
		updateQueryParams: (
			state,
			{ payload }: PayloadAction<IQueryParamsPayload>
		) => {
			state.queryParams[payload.key] = payload.value
			state.isFilterUpdate = true
		},
		resetFilter: state => {
			state.isFilterUpdate = false
			state.queryParams = queryParams
		},
	},
})

export const { actions, reducer } = filterSlice
