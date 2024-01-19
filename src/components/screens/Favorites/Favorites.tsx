'use client'

import { useAuth } from '@/hooks/useAuth'
import { userService } from '@/services/auth/auth.service'
import { IProfile } from '@/types/user.interface'

import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { useQuery } from 'react-query'
import FavoritesItem from './FavoritesItem'

const Favorites: FC = () => {
	const { user } = useAuth()

	const { data: profile } = useQuery<IProfile>(
		'profile',
		() => userService.getProfile(user?.id),
		{
			select: data => data,
			enabled: !!user?.id,
		}
	)
	const { push } = useRouter()

	useEffect(() => {
		if (!user) {
			push('/')
		}
	}, [user])

	if (!profile) return null
	return (
		<div>
			<ul>
				{profile?.products.map(favorite => (
					<li key={favorite.id}>
						<FavoritesItem favorite={favorite} />
					</li>
				))}
			</ul>
		</div>
	)
}
export default Favorites
