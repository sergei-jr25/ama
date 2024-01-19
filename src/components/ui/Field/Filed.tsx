import { forwardRef } from 'react'

import { IField } from './Field.interface'
import styles from './Field.module.scss'

const Filed = forwardRef<HTMLInputElement, IField>(
	({ error, placeholder, type, ...rest }, ref) => {
		return (
			<label className={styles.field}>
				<input
					ref={ref}
					className={styles.field__input}
					placeholder={placeholder}
					type={type}
					{...rest}
				/>
				<span className={styles.field__error}>{error?.message}</span>
			</label>
		)
	}
)
export default Filed
