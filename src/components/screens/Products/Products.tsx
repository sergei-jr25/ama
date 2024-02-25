'use client'

import Pagination from '@/components/ui/Pagination/Pagination'
import CustomSelect from '@/components/ui/Select/Select'
import { EnumProductSort } from '@/components/ui/Select/select-interface'
import { useAuth } from '@/hooks/useAuth'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { FC, useState } from 'react'
import styles from './Products.module.scss'
import ProductsItem from './ProductsItem'
import { useProducts } from './useProducts'

const Products: FC<{ products: IProduct[] }> = ({ products }) => {
	const { user } = useAuth()
	const [page, setPage] = useState(1)

	const { isFetched, data, uploadNewParams } = useProducts(products)

	const { items } = useCart()

	const handleSorting = (option: EnumProductSort) => {
		uploadNewParams('sort', option)
	}

	const handlePagination = (currentPage: number) => {
		console.log(currentPage)
		setPage(+currentPage)
		uploadNewParams('page', String(currentPage))
	}

	const itemsPerPage = 5 // Количество товаров на странице
	const totalPage = Math.ceil(data.length / itemsPerPage)

	const pages = Array.from(
		{ length: totalPage > 1 ? totalPage : 1 },
		(_, index) => index + 1
	)

	return (
		<div className={styles.products}>
			{data?.products?.length ? (
				<div className={styles.products__select}>
					<CustomSelect handleSorting={handleSorting} />
				</div>
			) : (
				<div></div>
			)}

			<div className={styles.products__items}>
				{data.products ? (
					data.products?.map((product: IProduct) => (
						<ProductsItem key={product.id} product={product} />
					))
				) : (
					<>
						<div className={styles.products__item_loading}>
							<div className={styles.products__spinnner}></div>
						</div>
						<div className={styles.products__item_loading}>
							<div className={styles.products__spinnner}></div>
						</div>
						<div className={styles.products__item_loading}>
							<div className={styles.products__spinnner}></div>
						</div>
						<div className={styles.products__item_loading}>
							<div className={styles.products__spinnner}></div>
						</div>
					</>
				)}
			</div>

			{data?.products?.length && (
				<div className={styles.products__pagination}>
					<Pagination
						handleClick={(currentPage: number) => handlePagination(currentPage)}
						pages={pages}
						currentPage={page}
					/>
				</div>
			)}
		</div>
	)
}
export default Products

// {pathinations.map(el => (
// 	<div onClick={() => handleClick(el)}>{el}</div>
// ))}
