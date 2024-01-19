import { IQueryParams } from '@/store/filters/filters.interface'
import { IProduct } from '@/types/product.interface'
import { http } from '../api/http'
import { IProductDto } from './dto/service.dto'

export const productService = {
	async getAll(queryParams: IQueryParams) {
		const { data } = await http.get<IProduct[]>('/product', {
			params: queryParams,
		})

		return data
	},

	async getById(id: string) {
		const { data } = await http.get(`/product/by-id/${id}`)

		return data
	},
	async getBySlug(slug: string) {
		const { data } = await http.get(`/product/by-slug/${slug}`)

		return data
	},

	async getSimilar(id: string) {
		const { data } = await http.get(`/product/similar/${id}`)
		return data
	},

	async update(id: string, dto: IProductDto) {
		const { data } = await http.put(`/product/update/${id}`, { data: dto })

		return data
	},
	async delete(id: string) {
		const { data } = await http.delete(`/product/delete/${id}`)
		return data
	},
}
