import { selectorCart } from '@/store/selectors'
import { iOrderItem } from '@/types/order-item.interface'

describe('cart slectors', () => {
	it('should cart selectors from state object empty', () => {
		const initialState = {
			cart: {
				items: [],
			},
		}
		const resault = selectorCart(initialState)
		expect(resault).toEqual(initialState.cart)
	})

	it('should cart selectors from state object data', () => {
		const fakeOrderItem: iOrderItem = {
			id: 1,
			quantity: 2,
			price: 100,
			product: {
				id: 1,
				description: 'Product description',
				isExsist: true,
				userId: 1,
				categoryId: 1,
				price: 100,
				slug: 'product-slug',
				image: ['/images/product1.jpg'],
				name: 'Product Name',
				searchTerm: 'Product Search Term',
				category: {
					id: 1,
					slug: 'category-slug',
					name: 'Category Name',
				},
				user: {
					id: 1,
					email: 'user@example.com',
					name: 'Jane Smith',
					password: 'password',
					avatarPath: '/avatars/user.jpg',
					phone: '+9876543210',
					Order: 'order456',
					products: [],
					reviews: [],
				},
				reviews: {
					id: 1,
					count: 5,
					productId: 1,
					userId: 1,
					text: 'Great product!',
					updatedAt: Date.now(),
					user: {
						id: 1,
						email: 'user@example.com',
						name: 'Jane Smith',
						password: 'password',
						avatarPath: '/avatars/user.jpg',
						phone: '+9876543210',
						Order: 'order456',
						products: [],
						reviews: [],
					},
				},
			},
		}

		const initialState = {
			cart: {
				items: [fakeOrderItem],
			},
		}
		const resault = selectorCart(initialState)
		expect(resault).toEqual(initialState.cart)
	})
})
