import { useEffect, useState } from 'react'

export const useDebounce = (value: string, delay: number) => {
	const [search, setSearch] = useState(value)

	useEffect(() => {
		let timer = setTimeout(() => {
			setSearch(value)
		}, delay)

		return () => {
			clearTimeout(timer)
		}
	}, [value])

	return search
}
