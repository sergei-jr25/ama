import type { FC, PropsWithChildren } from 'react'
import styles from './CheckBox.module.scss'

interface ICheckBox {
	isChecked: boolean
	onClick?: () => void
}

const CheckBox: FC<PropsWithChildren<ICheckBox>> = ({
	isChecked,
	onClick,
	children,
}) => {
	return (
		<label className={styles.checkbox} onClick={onClick}>
			<button
				className={`${styles.checkbox__button} ${
					isChecked ? styles.checkbox__button_active : ''
				}`}
			></button>
			{children}
		</label>
	)
}
export default CheckBox
