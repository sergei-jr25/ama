import { useFilters } from '@/hooks/useFilters'
// import { useFilters } from '../../../../hooks/useFilters'

import { useSearchParams } from 'next/navigation'
import { FC } from 'react'
import CheckBox from '../../CheckBox/CheckBox'
import styles from './CatalogGroup.module.scss'
import { useCatalogGroup } from './useCatalogGroup'

const CatalogGroup: FC = () => {
	const { data, isFetched } = useCatalogGroup()
	const searchParams = useSearchParams()
	console.log(data)

	const categoryId = searchParams.get('category')
	const { uploadNewParams, removeQueryParams } = useFilters()

	const clearFilters = () => {
		removeQueryParams()
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
					onClick={() => setCategory(category.id)}
					children={
						<div
							className={`${styles.group__category} ${
								categoryId && +categoryId === category.id
									? styles.group__category_active
									: ''
							} `}
						>
							{category.name}
						</div>
					}
				/>
			))}

			<button
				data-testid='button-catalog'
				onClick={clearFilters}
				className={styles.group__button}
			>
				Сбросить
			</button>
		</div>
	)
}
export default CatalogGroup
