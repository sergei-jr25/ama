import { FC, useEffect, useState } from 'react'
import styles from './Counter.module.scss'

interface ICounter {
	totalCount: number
	count: number
	incrementToCart: () => void
	decrementToCart: () => void
	isFetching?: boolean
}

const Counter: FC<ICounter> = ({
	count,
	decrementToCart,
	incrementToCart,
	totalCount,
	isFetching,
}) => {
	const [isIncrease, setIsIncrease] = useState(false)
	const [isDecrease, setIsDecrease] = useState(false)

	useEffect(() => {
		if (count === 1) {
			setIsDecrease(true)
		} else {
			setIsDecrease(false)
		}
	}, [count])
	useEffect(() => {
		if (count == totalCount) {
			setIsIncrease(true)
		} else {
			setIsIncrease(false)
		}
	}, [count])
	const increaseCount = () => {
		incrementToCart()
		setIsIncrease
	}

	const decreaseCount = () => {
		decrementToCart()
	}

	return (
		<div className={styles.counter}>
			<button
				disabled={isDecrease}
				className={styles.counter__minus}
				onClick={decreaseCount}
				name='minus'
			></button>

			<span className={styles.counter__number}>{count}</span>

			<button
				disabled={isIncrease}
				className={styles.counter__plus}
				onClick={increaseCount}
				name='plus'
				data-testid='plus-button'
			></button>
		</div>
	)
}
export default Counter
