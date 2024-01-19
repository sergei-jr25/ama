import { userService } from '@/services/auth/auth.service'
import { IProfile } from '@/types/user.interface'
import { toastrError } from '@/utils/toastr-error'
import { QueryClient } from '@tanstack/react-query'
import { useMutation, useQuery } from 'react-query'
import toastr from 'toastr'

export const useFavoriteButon = (userId: number | undefined) => {
	const queryClient = new QueryClient()

	const { data: profile } = useQuery<IProfile>(
		['getProfile'],
		() => userService.getProfile(userId),
		{
			select: data => data,
			enabled: !!userId,
		}
	)

	const { mutateAsync } = useMutation(
		['favorites', userId],
		(productId: number) => userService.setFavorites(userId, productId),
		{
			onSuccess: () => {
				toastr.success('Товар добавлен')
				queryClient.invalidateQueries({ queryKey: ['getProfile'] })
			},
			onError: error => {
				toastrError(error)
			},
		}
	)

	return {
		mutateAsync,
		profile,
	}
}
