import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { useOutside } from '@/hooks/useOutside'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { FC, useState } from 'react'
import styles from './User.module.scss'

const User: FC = () => {
	const [open, setOpen] = useState(false)
	const { user, isLoading } = useAuth()
	const { logout } = useActions()
	const { push } = useRouter()
	const { isShow, ref, setIsShow } = useOutside(false)

	const hadnleSetIsShow = () => {
		setIsShow(!isShow)
	}

	const hadnleLogout = () => {
		logout()
	}

	return (
		<div className={styles.user} ref={ref}>
			<button onClick={hadnleSetIsShow}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					height='24'
					viewBox='0 -960 960 960'
					width='24'
				>
					<path d='M234-276q51-39 114-61.5T480-360q69 0 132 22.5T726-276q35-41 54.5-93T800-480q0-133-93.5-226.5T480-800q-133 0-226.5 93.5T160-480q0 59 19.5 111t54.5 93Zm246-164q-59 0-99.5-40.5T340-580q0-59 40.5-99.5T480-720q59 0 99.5 40.5T620-580q0 59-40.5 99.5T480-440Zm0 360q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q83 0 156 31.5T763-763q54 54 85.5 127T880-480q0 83-31.5 156T763-197q-54 54-127 85.5T480-80Zm0-80q53 0 100-15.5t86-44.5q-39-29-86-44.5T480-280q-53 0-100 15.5T294-220q39 29 86 44.5T480-160Zm0-360q26 0 43-17t17-43q0-26-17-43t-43-17q-26 0-43 17t-17 43q0 26 17 43t43 17Zm0-60Zm0 360Z' />
				</svg>
			</button>
			{isShow && (
				<div className={styles.user__profile}>
					{user ? (
						<div className={styles.user__body}>
							<ul className={styles.user__list}>
								<li className={styles.user__item}>
									<Link href={'/profile'}>Профиль</Link>
								</li>
								<li className={styles.user__item}>
									<Link href={'/favorites'}>Избранные</Link>
								</li>
								<li className={styles.user__item}>
									<button onClick={() => logout()}>Выйти</button>
								</li>
							</ul>
						</div>
					) : (
						<ul>
							<li className={styles.user__item}>
								<Link href={'/auth'}>Войти</Link>
							</li>
						</ul>
					)}
				</div>
			)}
		</div>
	)
}
export default User
