'use client'
import { store } from '@/store/store'
import { FC } from 'react'
import { QueryClient, QueryClientProvider } from 'react-query'
import { Provider } from 'react-redux'

const query = new QueryClient()

const MainProvider: FC<{ children: React.ReactNode }> = ({ children }) => {
	return (
		<>
			<QueryClientProvider client={query}>
				<Provider store={store}>{children}</Provider>
			</QueryClientProvider>
		</>
	)
}
export default MainProvider
