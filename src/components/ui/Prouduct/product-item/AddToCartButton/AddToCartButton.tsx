import { useActions } from '@/hooks/useActions'
import { useCart } from '@/hooks/useCart'
import { IProduct } from '@/types/product.interface'
import { FC } from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'
import styles from './AddToCartButton.module.scss'

const AddToCartButton: FC<{ product: IProduct }> = ({ product }) => {
	const { items } = useCart()
	const { addToCart, changeToCart, removeToCart } = useActions()
	const productCartExist = items.some(item => item.product.id === product.id)

	const addToCartHandle = () => {
		const priceAvarage = items.reduce(
			(acc, item) => (acc += item.price) + product.price,
			0
		)

		addToCart({
			product,
			price: priceAvarage,
			quantity: 1,
		})
	}

	const removeToCartHandle = () => {
		removeToCart({ id: items.length - 1 })
	}
	return (
		<button
			className={`${styles.cart} ${productCartExist ? styles.cart_active : ''}`}
			onClick={productCartExist ? removeToCartHandle : addToCartHandle}
		>
			<AiOutlineShoppingCart />
		</button>
	)
}
export default AddToCartButton
