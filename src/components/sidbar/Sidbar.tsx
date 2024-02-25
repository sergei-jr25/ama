import { ICategory } from '@/types/category.interface'
import { FC } from 'react'
import Categorys from '../screens/Categorys/Categorys'

export interface ISaidBar {
	categorys: ICategory[]
}

const Sidbar: FC<ISaidBar> = ({ categorys }) => {
	return (
		<div>
			<Categorys categorys={categorys} />
		</div>
	)
}
export default Sidbar
