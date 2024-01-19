import { userService } from '@/services/auth/auth.service'
import { IProfile } from '@/types/user.interface'
import { useMemo } from 'react'
import { useQuery } from 'react-query'

export const useProfile = (id: number | undefined) => {
	const { data } = useQuery<IProfile>(
		'profile',
		() => userService.getProfile(id),
		{
			select: data => data,
			enabled: !!id,
		}
	)

	return useMemo(() => {
		return { data }
	}, [data])
}
