import CloseSvg from '@/components/ui/IconsSvg/CloseSvg'
import Skeleton from '@/components/ui/Skeleton/Skeleton'
import { useAuth } from '@/hooks/useAuth'
import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC } from 'react'
import styles from './Cart.module.scss'

const CartItem: FC<{
	item: IProduct
	isFetching: boolean
}> = ({ item, isFetching }) => {
	const { user } = useAuth()
	// const { profile, mutateAsync } = useProducts(user?.id)

	// const removeToCart = (productId: number) => {
	// 	mutateAsync(productId)
	// }

	return (
		<li className={styles.cart__item}>
			<div className={styles.cart__header}>
				<Image width={100} height={100} src={item.image[0]} alt={item.name} />
				<div className={styles.cart__content}>
					<div className={styles.cart__value}>{item.name}</div>
					<div className={styles.cart__value}>{item.price}</div>
				</div>
			</div>
			<div className={styles.cart__actions}>
				{isFetching ? (
					<Skeleton width='20px' />
				) : (
					<button
						// onClick={() => removeToCart(item.id)}
						className={styles.cart__delete}
					>
						<CloseSvg />
					</button>
				)}
				{/* <Counter
					count={count}
					decrementToCart={decreaseCount}
					incrementToCart={increaseCount}
					totalCount={item.inStock}
					isFetching={isFetching}
				/> */}
			</div>
			{/* <div>
				<AiOutlineShoppingCart />
			</div> */}
		</li>
	)
}
export default CartItem
