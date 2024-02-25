import '@testing-library/jest-dom'
import { fireEvent, render, screen } from '@testing-library/react'

import Button from './Button'

describe('Button component', () => {
	it('renders button with correct styles and children', () => {
		render(<Button>Click me</Button>)

		// Проверяем, что кнопка отрисовалась с корректными стилями
		const buttonElement = screen.getByRole('button')

		// Проверяем, что присутствует класс 'button'
		expect(buttonElement).toHaveClass('button')

		// Проверяем, что дочерний элемент (текст) присутствует
		expect(buttonElement).toHaveTextContent('Click me')
	})

	it('callsa onClick prop when the button is clicked', () => {
		const onClickMock = jest.fn()

		render(<Button onClick={onClickMock}>Click me</Button>)

		const button = screen.getByRole('button')
		fireEvent.click(button)
		expect(onClickMock).toHaveBeenCalled()
	})
})
