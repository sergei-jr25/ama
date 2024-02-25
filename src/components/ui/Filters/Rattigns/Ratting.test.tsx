import * as filters from '@/hooks/useFilters'
import '@testing-library/jest-dom'
import { fireEvent, render } from '@testing-library/react'
import Rattigns from './Rattigns'
import { VARIANTRATINGS } from './ratins-variant.data'

// Мокируем функцию TypeSelector из вашего хука useFilters
jest.mock('../../../../hooks/useFilters', () => ({
	__esModule: true,
	useFilters: jest.fn(() => ({
		uploadNewParams: jest.fn(),
		queryParams: {}, // Пустые параметры запроса для начала
	})),
}))

// Мокируем ваше состояние Redux
jest.mock('react-redux', () => ({
	...jest.requireActual('react-redux'),
	useSelector: jest.fn(selectorFn => selectorFn({ filters: {} })), // Мокируем фильтры по умолчанию
}))

describe('Ratting Component', () => {
	it('redner  without cashing', () => {})

	it('renders checkbox for each ratig', () => {
		const uploadNewParamsMock = jest.fn()
		filters.useFilters.mockReturnValue({
			uploadNewParams: uploadNewParamsMock,
			queryParams: { ratings: [] }, // Пустые параметры запроса для начала
		})

		const { getByTestId } = render(<Rattigns />)
		const checkBoxes = VARIANTRATINGS.map(rating =>
			getByTestId(`checkbox-${rating}`)
		)

		checkBoxes.forEach((checkbox, rating) => {
			fireEvent.click(checkbox)
			expect(uploadNewParamsMock).toHaveBeenCalledWith({
				ratings: checkbox.value,
			})
		})
	})
})
