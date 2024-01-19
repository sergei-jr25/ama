'use client'

import { useAuth } from '@/hooks/useAuth'
import { FC } from 'react'
import Cart from './Cart/Cart'
import styles from './Header.module.scss'
import Logo from './Logo/Logo'
import User from './User/User'
import { useHeader } from './useHeader'

const Header: FC = () => {
	const { user } = useAuth()
	const { data, isFetched } = useHeader(user?.id)
	return (
		<div className={styles.header}>
			<Logo />
			<div className={styles.header__actions}>
				<Cart />
				<User />
			</div>
		</div>
	)
}
export default Header
