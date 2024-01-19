import { FC } from 'react'
import styles from './Pagination.module.scss'

interface IPagination {
	pages: number[]
	handleClick: (page: number) => void
	currentPage: number
}

const Pagination: FC<IPagination> = ({ pages, handleClick, currentPage }) => {
	return (
		<div className={styles.pagination}>
			{pages.map(page => (
				<div
					key={page}
					className={`${styles.pagination__page} ${
						currentPage === page ? styles.pagination__page_active : ''
					}`}
					onClick={() => handleClick(page)}
				>
					{page}
				</div>
			))}
		</div>
	)
}
export default Pagination
