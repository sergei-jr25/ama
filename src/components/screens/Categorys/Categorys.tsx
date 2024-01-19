'use client'

import { ICategory } from '@/types/category.interface'
import { FC } from 'react'
import styles from './Categorys.module.scss'
import CategorysItem from './CategorysItem'

const Categorys: FC<{ categorys: ICategory[] }> = ({ categorys }) => {
	return (
		<div className={styles.category}>
			{categorys.map(category => (
				<CategorysItem category={category} />
			))}
		</div>
	)
}
export default Categorys
