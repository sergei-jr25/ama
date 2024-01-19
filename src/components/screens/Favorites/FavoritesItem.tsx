import { IProduct } from '@/types/product.interface'
import Image from 'next/image'
import { FC } from 'react'

const FavoritesItem: FC<{ favorite: IProduct }> = ({ favorite }) => {
	return (
		<div>
			<Image
				src={favorite.image[0]}
				alt={favorite.name}
				width={140}
				height={140}
			/>
			<div>{favorite.name}</div>
			<div>{favorite.description}</div>
			<div>{favorite.price}</div>
		</div>
	)
}
export default FavoritesItem
