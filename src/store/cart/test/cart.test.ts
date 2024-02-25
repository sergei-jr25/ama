import { actions, reducer } from '../cart.slice'

const product = {
	id: 1,
	description: 'Product description',
	isExsist: true,
	userId: 1,
	categoryId: 1,
	price: 10,
	slug: 'product-slug',
	image: ['image1.jpg', 'image2.jpg'],
	name: 'Product name',
	searchTerm: 'product search term',
}

describe('cart test', () => {
	const initialState = {
		items: [],
	}
	const item = {
		id: 0,
		quantity: 1,
		price: 1000,
		product: product,
		type: 'plus',
	}

	const stateData = {
		items: [item],
	}
	it('add to cart', () => {
		const newState = reducer(initialState, actions.addToCart(item))

		expect(newState.items.length).toEqual(1)
		expect(newState.items[0]).toEqual(item)
	})

	it('remove to cart', () => {
		const newState = reducer(stateData, actions.removeToCart({ id: 0 }))

		expect(newState).toEqual(initialState)
	})

	it('reset to cart', () => {
		const newState = reducer(initialState, actions.reset([]))

		expect(newState).toEqual(initialState)
	})
})
