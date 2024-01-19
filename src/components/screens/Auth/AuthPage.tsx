'use client'

import Button from '@/components/ui/Button/Button'
import Filed from '@/components/ui/Field/Filed'
import { useActions } from '@/hooks/useActions'
import { useAuth } from '@/hooks/useAuth'
import { usePathname, useRouter } from 'next/navigation'
import { FC, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { validateEmail } from '../../../utils/validateEmail'
import styles from './AuthPage.module.scss'

const AuthPage: FC = () => {
	const {
		formState: { errors },
		register,
		reset,
		handleSubmit,
	} = useForm({ mode: 'onChange' })

	const [type, setType] = useState<'login' | 'register'>('register')

	const { user } = useAuth()
	console.log(user)

	const { logout, userLogin, userRegister } = useActions()
	const pathname = usePathname()
	const { push } = useRouter()

	useEffect(() => {
		if (user) {
			push('/')
		}
	}, [pathname, user])

	const onSubmit = (data: any) => {
		if (type === 'login') {
			userLogin(data)
		} else {
			userRegister(data)
		}
	}
	return (
		<div className={styles.auth}>
			<h2 className={styles.auth__title}>Авторизация</h2>
			<form className={styles.auth__form} onSubmit={handleSubmit(onSubmit)}>
				<Filed
					{...register('email', {
						required: 'Email is require',
						pattern: {
							value: validateEmail,
							message: 'Incorrectle email',
						},
					})}
					error={errors.email}
					placeholder='Email'
					type='email'
					name='email'
				/>
				<Filed
					{...register('password', {
						required: 'Password require',
						minLength: {
							value: 5,
							message: 'Password min length 5 symbols',
						},
					})}
					error={errors.password}
					placeholder='Password'
					type='password'
				/>
				<Button onClick={() => setType('register')}>Зарегестрироватся</Button>
				<Button onClick={() => setType('login')}>Войти</Button>
			</form>
		</div>
	)
}
export default AuthPage
