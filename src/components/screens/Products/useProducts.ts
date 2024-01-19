import { productService } from '@/services/product.service'

import { useFilters } from '@/hooks/useFilters'
import { TypeSelector } from '@/hooks/useTypedSelector'
import { QueryClient } from '@tanstack/react-query'
import { useEffect, useMemo } from 'react'
import { useQuery } from 'react-query'

export const useProducts = (initialData: any = []) => {
	const { queryParams, isFilterUpdate } = TypeSelector(state => state.filters)
	const queryClient = new QueryClient()
	const { checkQueryParams, uploadNewParams } = useFilters()

	const { data, isFetched, error, refetch } = useQuery<any>(
		['getProducts', queryParams],
		() => productService.getAll(queryParams),
		{
			initialData: initialData,
			// enabled: isFilterUpdate,
		}
	)
	useEffect(() => {
		checkQueryParams()
	}, [])

	// console.log('queryParams', queryParams)
	// useEffect(() => {
	// 	checkQueryParams()
	// 	// Внутри этого эффекта используйте refetch, чтобы выполнить запрос с новыми параметрами
	// }, [queryParams]) // Зависимость эффекта - queryParams

	return useMemo(() => {
		return {
			data,
			isFetched,
			uploadNewParams,
			refetch,
		}
	}, [data, isFetched, uploadNewParams, refetch])
}
