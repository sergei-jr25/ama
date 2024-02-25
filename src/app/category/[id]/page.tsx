import Category from './Category'

async function getData(id: number) {
	const category = await fetch(
		`${process.env.NEXT_PUBLIC_APP_URL}/catalog/${id}`
	)
	const categorys = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/catalog`)
	return {
		category: await category.json(),
		categorys: await categorys.json(),
	}
}

type Props = {
	params: {
		id: number
	}
}

const PageCategory = async ({ params: { id } }: Props) => {
	const { category, categorys } = await getData(id)
	console.log(category)

	return (
		<Category
			product={category.products[0] || {}}
			categorys={categorys || []}
		/>
	)
}
export default PageCategory
