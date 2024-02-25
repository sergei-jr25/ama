import '@testing-library/jest-dom'

import { fireEvent, render } from '@testing-library/react'
import Pagination from './Pagination'

describe('Pagination component', () => {
	it('reander all pages', () => {
		const pages = [1, 2, 3]

		const { getByText } = render(
			<Pagination pages={pages} currentPage={1} handleClick={() => {}} />
		)

		pages.forEach(page => {
			expect(getByText(page.toString())).toBeInTheDocument()
		})
	})
	it('calls handleClick with correctly page number', () => {
		const pages = [1, 2, 3]
		const handleClick = jest.fn()
		const { getByText } = render(
			<Pagination pages={pages} currentPage={1} handleClick={handleClick} />
		)

		fireEvent.click(getByText('2'))
		expect(handleClick).toHaveBeenCalledWith(2)
	})

	it('highlights cuttent page', () => {
		const pages = [1, 2, 3]
		const currentPage = 2
		const { getByText } = render(
			<Pagination
				pages={pages}
				currentPage={currentPage}
				handleClick={() => {}}
			/>
		)
		expect(getByText(currentPage.toString())).toHaveClass(
			'pagination__page_active'
		)
	})
})
