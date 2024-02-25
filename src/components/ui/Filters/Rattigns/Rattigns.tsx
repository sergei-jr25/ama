import { useFilters } from '@/hooks/useFilters'
import { Rating } from '@mui/material'
import { FC } from 'react'
import CheckBox from '../../CheckBox/CheckBox'
import styles from './Rattigns.module.scss'
import { VARIANTRATINGS } from './ratins-variant.data'

const Rattigns: FC = () => {
	const { uploadNewParams, queryParams } = useFilters()

	return (
		<div className={styles.ratting}>
			{VARIANTRATINGS.map((rating, idx) => (
				<div data-testid={`checkbox-${rating}`}>
					<CheckBox
						key={rating}
						isChecked={
							queryParams.ratings?.includes(rating.toString()) || false
						}
						onClick={() => uploadNewParams('ratings', rating.toString())}
					>
						<Rating key={rating} name='simple-controlled' value={rating} />
					</CheckBox>
				</div>
			))}
		</div>
	)
}
export default Rattigns
