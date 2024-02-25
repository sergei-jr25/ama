import '@testing-library/jest-dom'

import { render, screen } from '@testing-library/react'
import Filed from './Filed'

describe('Field Component', () => {
	it('renders input with correct placeholder and type', () => {
		const placeholder = 'Placeholder'
		const type = 'text'

		render(<Filed placeholder='Placeholder' type={type} />)
		expect(screen.getByPlaceholderText('Placeholder')).toHaveAttribute(
			'type',
			type
		)
	})

	it('renders label with correct text and input with correct placeholder and type', () => {
		const type = 'text'
		render(<Filed placeholder='Placeholder' type={type} />)
		const labelElement = screen.getByPlaceholderText('Placeholder')
		expect(labelElement).toHaveClass('field__input')
		expect(labelElement).toMatchSnapshot()
	})

	it('Chacked error message', () => {
		const errorMessage = 'This is an error message'
		render(<Filed error={{ message: errorMessage }} />)
		const spanError = screen.getByText(errorMessage)
		expect(spanError).toBeInTheDocument()
	})
})
