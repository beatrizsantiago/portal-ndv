import axios from 'axios'
import Cookies from 'js-cookie'

export const Bootstrap = () => {
    axios.defaults.baseURL = 'https://api-ndv.indgo.com.br/api/'
    axios.defaults.timeout = 25000
    axios.interceptors.request.use(async config => {
        try {
            const token = await Cookies.get('token')
            config.headers.Authorization = token ? `Bearer ${token}` : ''
            return config
        } catch (error) {
            console.error(error);
        }
    })
}
