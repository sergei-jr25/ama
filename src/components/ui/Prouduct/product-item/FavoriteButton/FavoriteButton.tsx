import { useAuth } from '@/hooks/useAuth'
import { IProduct } from '@/types/product.interface'

import { FC } from 'react'
import { GrFavorite } from 'react-icons/gr'
import { MdFavorite } from 'react-icons/md'
import styles from './FavoriteButton.module.scss'
import { useFavoriteButon } from './useFavoriteButton'

const FavoriteButton: FC<{ product: IProduct }> = ({ product }) => {
	const { user } = useAuth()
	const { mutateAsync, profile } = useFavoriteButon(user?.id)

	const addToFavorite = (productId: number) => {
		if (user) {
			mutateAsync(productId)
		}
	}

	const favoriteExist = profile?.products.some(item => item.id === product.id)
	return (
		<button
			className={styles.favorite}
			onClick={() => addToFavorite(product.id)}
		>
			{favoriteExist ? <MdFavorite /> : <GrFavorite />}
		</button>
	)
}
export default FavoriteButton
