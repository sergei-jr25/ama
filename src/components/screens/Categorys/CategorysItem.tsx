import { ICategory } from '@/types/category.interface'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC } from 'react'
import styles from './Categorys.module.scss'

const CategorysItem: FC<{ category: ICategory }> = ({ category }) => {
	const pathname = usePathname()

	return (
		<Link href={`/category/${category.id}`} className={styles.category__items}>
			{category.name}
		</Link>
	)
}
export default CategorysItem
