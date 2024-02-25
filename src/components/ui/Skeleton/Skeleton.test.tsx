import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Skeleton from './Skeleton'

describe('Skeleton component', () => {
	it('checked have correctly classes', () => {
		render(<Skeleton />)

		const div = screen.getByTestId('skeleton-test')
		expect(div).toHaveClass('skeleton')
	})
	it('checked have correctly styles width and height', () => {
		render(<Skeleton height='50px' width='50px' />)

		const div = screen.getByTestId('skeleton-test')
		expect(div).toHaveStyle({ height: '50px', width: '50px' })
	})

	it('checked correacly children element', () => {
		render(<Skeleton />)

		const div = screen.getByTestId('skeleton-test')
		expect(div.firstChild).toBeInTheDocument()
		expect(div.firstChild).toHaveClass('shape')
	})
})
