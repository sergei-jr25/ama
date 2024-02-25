import { store } from '@/store/store'
import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import RangePrice from './RangePrice'

jest.mock('next/navigation', () => ({
	...jest.requireActual('next/navigation'), // Сначала импортируем все реальные функции
	useSearchParams: jest.fn(() => ({
		get: jest.fn().mockReturnValue('50'),
	})),
}))

jest.mock('../../../../hooks/useFilters', () => ({
	useFilters: jest.fn(() => ({
		uploadNewParams: jest.fn(),
	})),
}))

const renderRangePrice = () =>
	render(
		<Provider store={store}>
			<RangePrice />
		</Provider>
	)

describe('Range Price component', () => {
	it('Component mount', () => {
		renderRangePrice()
	})

	it('updates from price input correacly', () => {
		renderRangePrice()

		const fromInput = screen.getByPlaceholderText('from') as HTMLInputElement

		fireEvent.change(fromInput, { target: { value: 50 } })
		expect(fromInput.value).toBe('50')
	})

	it('updates to price input correacly', () => {
		renderRangePrice()

		const toValue = screen.getByPlaceholderText('from') as HTMLInputElement

		fireEvent.change(toValue, { target: { value: 100 } })
		expect(toValue.value).toBe('100')
	})
})
