import { categoryService } from '@/services/category.service'
import { ICategory } from '@/types/category.interface'
import { useQuery } from 'react-query'

export const useCatalogGroup = () => {
	const dataQuery = useQuery<ICategory[]>('product group', () =>
		categoryService.getAll()
	)

	return dataQuery
}
