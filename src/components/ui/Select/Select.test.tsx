import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import CustomSelect from './Select'
import { EnumProductSort } from './select-interface'

describe('Select component', () => {
	it('checked show selecred header', () => {
		render(<CustomSelect handleSorting={() => {}} />)
		// const select = screen.getByTestId('select-test-id')
		const select = screen.getByRole('heading')
		expect(select).toHaveTextContent(EnumProductSort.NEWEST)
	})

	it('calls handleSorting with selected option when an option is clicked', () => {
		const mockHandleClick = jest.fn()
		render(<CustomSelect handleSorting={mockHandleClick} />)

		const heading = screen.getByRole('heading')
		fireEvent.click(heading)
		const option = screen.getByText(EnumProductSort.OLSEST)
		fireEvent.click(option)
		expect(mockHandleClick).toHaveBeenCalledWith(EnumProductSort.OLSEST)
	})

	it('displays all options form EnumProductSort', () => {
		render(<CustomSelect handleSorting={() => {}} />)
		const selectHeader = screen.getByRole('heading')
		fireEvent.click(selectHeader)
		const optionElements = screen.getAllByTestId('select-list-item')

		// Получаем текстовые значения опций из EnumProductSort
		const enumOptions = Object.values(EnumProductSort)

		// Проверяем, что каждое значение из EnumProductSort присутствует в списке опций
		enumOptions.forEach(option => {
			expect(optionElements.some(el => el.textContent === option)).toBeTruthy()
		})
	})

	it('open and closes dropdown', () => {
		render(<CustomSelect handleSorting={() => {}} />)

		const selectHeading = screen.getByRole('heading')
		fireEvent.click(selectHeading)
		expect(screen.getByRole('list')).toBeInTheDocument()
		fireEvent.click(selectHeading)
		expect(screen.queryByRole('list')).toBeNull()
	})

	it('correctly update class by change isOpen', () => {
		render(<CustomSelect handleSorting={() => {}} />)

		const heading = screen.getByRole('heading')
		fireEvent.click(heading)
		expect(heading).toHaveClass('select__open')
		fireEvent.click(heading)
		expect(heading).not.toHaveClass('select__open')
	})

	it('applies correct styles to elements based on their state', () => {
		render(<CustomSelect handleSorting={() => {}} />)

		const heading = screen.getByRole('heading')
		fireEvent.click(heading)
		const list = screen.getByRole('list')
		expect(list).toHaveClass('select__options')
		const option = screen.getByText(EnumProductSort.LOW_PRICE)
		expect(option).toHaveClass('select__option')
	})
})
