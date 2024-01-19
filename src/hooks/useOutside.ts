import { useEffect, useRef, useState } from 'react'

export const useOutside = (initialIsVisible: boolean) => {
	const [isShow, setIsShow] = useState(initialIsVisible)

	let ref = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (ref && ref.current?.contains(event.target as Node)) {
				return
			}
			setIsShow(false)
		}
		document.addEventListener('click', handleClickOutside)

		return () => document.removeEventListener('click', handleClickOutside)
	}, [isShow])

	return {
		isShow,
		setIsShow,
		ref,
	}
}
