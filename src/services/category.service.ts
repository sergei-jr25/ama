import { http } from '../api/http'
import { ICategoryDto } from './dto/category.dto'

export const categoryService = {
	async getAll() {
		const { data } = await http.get('/catalog')

		return data
	},

	async getById(id: string) {
		const { data } = await http.get(`/catalog/${id}`)

		return data
	},
	async getBySlug(slug: string) {
		const { data } = await http.get(`/catalog/by-slug/${slug}`)

		return data
	},

	async update(id: string, dto: ICategoryDto) {
		const { data } = await http.put(`/catalog/update/${id}`, { data: dto })

		return data
	},

	async create() {
		const { data } = await http.post(`/catalog/create`)

		return data
	},
	async delete(id: string) {
		const { data } = await http.delete(`/catalog/delete/${id}`)
		return data
	},
}
