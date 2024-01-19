import { userService } from '@/services/auth/auth.service'
import { IProfile } from '@/types/user.interface'
import { useQuery } from 'react-query'

export const useHeader = (id: number | undefined) => {
	const { data, isFetched } = useQuery<IProfile>(
		'getProfile',
		() => userService.getProfile(id),
		{ select: data => data, enabled: !!id }
	)

	return { data, isFetched }
}
