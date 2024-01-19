import { useProducts } from '@/components/screens/Products/useProducts'
import { useActions } from '@/hooks/useActions'
import { useFilters } from '@/hooks/useFilters'
import { categoryService } from '@/services/category.service'
import { ICategory } from '@/types/category.interface'
import { useSearchParams } from 'next/navigation'
import { FC } from 'react'
import { useQuery } from 'react-query'
import CheckBox from '../../CheckBox/CheckBox'
import styles from './CatalogGroup.module.scss'

const CatalogGroup: FC = () => {
	const { data, isFetched } = useQuery<ICategory[]>('product group', () =>
		categoryService.getAll()
	)
	const searchParams = useSearchParams()
	const newParams = new URLSearchParams(searchParams.toString())

	const { refetch } = useProducts()

	const categoryId = searchParams.get('category')
	const {
		uploadNewParams,
		removeQueryParams,
		checkQueryParams,
		isFilterUpdate,
	} = useFilters()

	const { resetFilter } = useActions()

	const clearFilters = async () => {
		removeQueryParams()
		refetch()
		// if (!isFilterUpdate) {
		//
		// }
	}

	const setCategory = (categoryId: number) => {
		uploadNewParams('category', String(categoryId))
	}

	return (
		<div className={styles.group}>
			{data?.map(category => (
				<CheckBox
					key={category.id}
					isChecked={categoryId ? +categoryId === category.id : false}
					children={
						<div
							className={`${styles.group__category} ${
								categoryId && +categoryId === category.id
									? styles.group__category_active
									: ''
							} `}
							onClick={() => setCategory(category.id)}
						>
							{category.name}
						</div>
					}
				/>
			))}

			<button onClick={clearFilters} className={styles.group__button}>
				Сбросить все
			</button>
		</div>
	)
}
export default CatalogGroup
