import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'
import CheckBox from './CheckBox'

describe('CheckBox component', () => {
	it('state checkBox is false', () => {
		render(<CheckBox isChecked={false}>Label </CheckBox>)

		const checkbox = screen.getByRole('button')
		expect(checkbox).not.toHaveClass('checkbox__button_active')
	})
	it('state checkBox is true', () => {
		render(<CheckBox isChecked={true}>Label </CheckBox>)

		const checkbox = screen.getByRole('button')
		expect(checkbox).toHaveClass('checkbox__button_active')
	})

	it('Calls onClick when checkbox is clicked', () => {
		const onClickMock = jest.fn()

		render(
			<CheckBox isChecked={false} onClick={onClickMock}>
				Label
			</CheckBox>
		)

		const checkBox = screen.getByText('Label')
		fireEvent.click(checkBox)
		expect(onClickMock).toHaveBeenCalled()
	})

	it('renders children correctly', () => {
		render(<CheckBox isChecked={false}>Children</CheckBox>)

		const checkBox = screen.getByText('Children')
		expect(checkBox).toBeInTheDocument()
	})
})
