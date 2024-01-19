'use client'

import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Filters from '../Filters/Filters'
import Products from '../Products/Products'
import styles from './Main.module.scss'

const Main: FC<{ products: IProduct[] }> = ({ products }) => {
	return (
		<div className={styles.main}>
			<Filters />
			<Products products={products} />
		</div>
	)
}
export default Main
