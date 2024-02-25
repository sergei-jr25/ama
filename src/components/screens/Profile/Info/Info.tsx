'use client'

import { useAuth } from '@/hooks/useAuth'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC, useEffect } from 'react'
import { useProfile } from '../useProfile'
import styles from './Info.module.scss'

const Info: FC = () => {
	const { user } = useAuth()
	const { data: profile } = useProfile(user?.id)
	const { push } = useRouter()

	useEffect(() => {
		if (!user) {
			push('/')
		}
	}, [user])

	if (!profile) return null
	return (
		<div className={styles.info}>
			<div className={styles.info__image}>
				<Image
					src={profile?.avatarPath}
					width={40}
					height={40}
					alt={profile?.name}
				/>
			</div>
			<div className={styles.info__email}>{profile.email}</div>
			<div className={styles.info__name}>{profile.name}</div>
			<div className={styles.info__reviews}>
				{profile.reviews && (
					<div>Quantity reviews {profile.reviews?.length}</div>
				)}
			</div>
			<div className={styles.info__products}>
				{profile.reviews && (
					<div>Quantity products {profile.products?.length}</div>
				)}
			</div>
		</div>
	)
}
export default Info
