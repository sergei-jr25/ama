'use client'

import Sidbar from '@/components/sidbar/Sidbar'
import { ICategory } from '@/types/category.interface'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import Main from '../Main/Main'
import styles from './Layout.module.scss'

export interface ILayout {
	products: IProduct[]
	categorys: ICategory[]
}

const Layout: FC<ILayout> = ({ categorys, products }) => {
	console.log(categorys)

	return (
		<div className={styles.layout}>
			<div className={styles.layout__container}>
				{/* <Header /> */}
				<div className={styles.layout__content}>
					<Sidbar categorys={categorys} />
					<div className={styles.layout__main}>
						<Main products={products} />
					</div>
				</div>
			</div>
		</div>
	)
}
export default Layout
