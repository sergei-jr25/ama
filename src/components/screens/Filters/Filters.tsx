'use client'

import CatalogGroup from '@/components/ui/Filters/CatalogGroup/CatalogGroup'
import RangePrice from '@/components/ui/Filters/RangePrice/RangePrice'
import Rattigns from '@/components/ui/Filters/Rattigns/Rattigns'
import { FC } from 'react'
import styles from './Filters.module.scss'

const Filters: FC = () => {
	return (
		<div className={styles.filters}>
			<RangePrice />
			<CatalogGroup />
			<Rattigns />
		</div>
	)
}
export default Filters
