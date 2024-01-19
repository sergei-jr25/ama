import Layout from '@/components/screens/Layout/Layout'

async function getData(id: number) {
	const category = await fetch(`${process.env.APP_URL}/catalog/${id}`)
	const categorys = await fetch(`${process.env.APP_URL}/catalog`)
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
		<div>
			<Layout categorys={categorys || []} products={category.products || []} />
		</div>
	)
}
export default PageCategory
