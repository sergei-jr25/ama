import { store } from '@/store/store'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
// import { useRouter, useSearchParams } from 'next/navigation'
import * as nextNavigation from 'next/navigation'
import { QueryClient, QueryClientProvider } from 'react-query'
import * as useCatalogGroup from './useCatalogGroup'

import { Provider } from 'react-redux'
import CatalogGroup from './CatalogGroup'

const mockedUseCatalog = useCatalogGroup

jest.mock('./useCatalogGroup', () => ({
	__esModule: true,
	useCatalogGroup: jest.fn(),
}))

jest.mock('next/navigation')

const queryClient = new QueryClient()
const mockedValue = jest.spyOn(nextNavigation, 'useSearchParams')

const renderCatalogGrop = () => {
	return render(
		<Provider store={store}>
			<QueryClientProvider client={queryClient}>
				<CatalogGroup />
			</QueryClientProvider>
		</Provider>
	)
}

describe('Catalog component', () => {
	const catalogData = [
		{ id: 1, name: 'Category-1', slug: 'category-1' },
		{ id: 2, name: 'Category-2', slug: 'category-2' },
	]

	const mockUseCatalogGroup = (data: any) => {
		mockedUseCatalog.useCatalogGroup.mockImplementation(() => ({
			data,
			isFetched: true,
		}))
	}

	beforeEach(() => {
		mockUseCatalogGroup(catalogData)
	})

	it('renders category checkboxes after fetching data', () => {
		const searchParamsMock = {
			get: jest.fn().mockReturnValue('category'),
		}
		nextNavigation.useRouter.mockReturnValue({
			replace: jest.fn(),
			push: jest.fn(),
		})
		nextNavigation.useSearchParams.mockReturnValue(searchParamsMock)
		renderCatalogGrop()

		expect(searchParamsMock.get).toHaveBeenCalledWith('category')

		const checkbooxName = screen.queryByText('Baby')
		expect(checkbooxName).not.toBeInTheDocument()
	})

	it('should render users list', () => {
		renderCatalogGrop()

		const name1 = screen.getByText('Category-1')
		const name2 = screen.getByText('Category-2')
		expect(name1).toBeInTheDocument()
		expect(name2).toBeInTheDocument()
	})

	// it('correct working fn clearFilters', () => {
	// 	const clearFiltersMock = jest.fn()

	// 	const mockCatalogGroup = jest.fn().mockImplementation(() => ({
	// 		clearFilters: clearFiltersMock,
	// 	}))

	// 	renderCatalogGrop()

	// 	const button = screen.getByTestId('button-catalog')
	// 	fireEvent.click(button)

	// 	expect(button).toBeInTheDocument()
	// 	expect(clearFiltersMock).toHaveBeenCalled()
	// })
})
