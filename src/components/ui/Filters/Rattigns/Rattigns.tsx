import { useFilters } from '@/hooks/useFilters'
import Rating from '@mui/material/Rating'
import { FC } from 'react'
import CheckBox from '../../CheckBox/CheckBox'
import styles from './Rattigns.module.scss'
import { VARIANTRATINGS } from './ratins-variant.data'

const Rattigns: FC = () => {
	const { uploadNewParams, queryParams } = useFilters()

	const {} = useFilters()

	return (
		<div className={styles.ratting}>
			{VARIANTRATINGS.map((rating, idx) => (
				<CheckBox
					isChecked={queryParams.ratings?.includes(rating.toString()) || false}
					onClick={() => uploadNewParams('ratings', rating.toString())}
				>
					<Rating name='simple-controlled' value={rating} />
				</CheckBox>
			))}
		</div>
	)
}
export default Rattigns
