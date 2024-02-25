'use client'
import ProductsItem from '@/components/screens/Products/ProductsItem'
import { IProductItem } from '@/components/screens/Products/poruct-interface'
import Sidbar from '@/components/sidbar/Sidbar'
import { ICategory } from '@/types/category.interface'
import { FC } from 'react'
import styles from './Category.module.scss'
interface ICatagoty extends IProductItem {
	categorys: ICategory[]
}

const Category: FC<ICatagoty> = ({ product, hanleClick, categorys }) => {
	return (
		<div className={styles.category__body}>
			<Sidbar categorys={categorys} />
			<div className={styles.category__items}>
				{product && <ProductsItem product={product} />}
			</div>
		</div>
	)
}
export default Category
