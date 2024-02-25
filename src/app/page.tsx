import Layout from '@/components/screens/Layout/Layout'
import { queryParams } from '@/store/filters/filters.data'

async function getData() {
	const searchParams = new URLSearchParams(queryParams)

	const products = await fetch(
		`${process.env.NEXT_PUBLIC_APP_URL}/product?${searchParams.toString()}`
	)
	const categorys = await fetch(`${process.env.NEXT_PUBLIC_APP_URL}/catalog`)
	return {
		products: await products.json(),
		categorys: await categorys.json(),
	}
}

const pageProduct = async () => {
	const { categorys, products } = await getData()

	return <Layout categorys={categorys || []} products={products || []} />
}
export default pageProduct
