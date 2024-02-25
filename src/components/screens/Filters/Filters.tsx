'use client'

import CatalogGroup from '@/components/ui/Filters/CatalogGroup/CatalogGroup'
import RangePrice from '@/components/ui/Filters/RangePrice/RangePrice'
import Rattigns from '@/components/ui/Filters/Rattigns/Rattigns'
import { useFilters } from '@/hooks/useFilters'
import { FC } from 'react'
import styles from './Filters.module.scss'

const Filters: FC = () => {
	const {
		uploadNewParams,
		removeQueryParams,
		checkQueryParams,
		isFilterUpdate,
	} = useFilters()

	const clearFilters = async () => {
		removeQueryParams()
	}
	return (
		<div className={styles.filters}>
			<RangePrice />
			<CatalogGroup />
			<Rattigns />
			<button onClick={clearFilters} className={styles.group__button}>
				Сбросить
			</button>
		</div>
	)
}
export default Filters
