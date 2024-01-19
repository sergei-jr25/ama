import { IQueryParams } from '@/store/filters/filters.interface'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { useActions } from './useActions'
import { TypeSelector } from './useTypedSelector'

export const useFilters = () => {
	const { queryParams, isFilterUpdate } = TypeSelector(state => state.filters)

	const pathname = usePathname()
	const searchParams = useSearchParams()!
	const newParams = new URLSearchParams(searchParams.toString())
	const { updateQueryParams, resetFilter } = useActions()
	const { replace, push } = useRouter()

	const checkQueryParams = () => {
		searchParams.forEach((value, key) => {
			updateQueryParams({ key: key as keyof IQueryParams, value })
		})
	}

	// useEffect(() => {
	// 	searchParams.forEach((value, key) => {
	// 		updateQueryParams({ key: key as keyof IQueryParams, value })
	// 	})
	// }, [])

	const uploadNewParams = (key: keyof IQueryParams, value: string) => {
		if (value) {
			newParams.set(key, String(value))
		} else {
			newParams.delete(key)
		}
		replace(`${pathname}?${newParams.toString()}`)
		updateQueryParams({ key, value })
	}

	const removeQueryParams = () => {
		searchParams.forEach((value, key) => {
			newParams.delete(key)
		})

		push(`${pathname}?${newParams.toString()}`)
		resetFilter()
	}

	return {
		checkQueryParams,
		uploadNewParams,
		removeQueryParams,
		queryParams,
		isFilterUpdate,
	}
}
