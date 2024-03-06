import Cookies from 'js-cookie'
import { $axios } from '../api'
import { TOKEN } from '../app.constants'

const AUTH = '/auth'

class AuthService {
	async main(email: string, password: string, type: string) {
		const { data } = await $axios.post(`${AUTH}/${type}`, {
			email,
			password
		})
		if (data.token) Cookies.set(TOKEN, data.token)
		return data
	}
}
export default new AuthService()
