import axios from 'axios'
import Cookies from 'js-cookie'

export async function Login(email, password) {
    try {
        let login = await axios.post('account/login', { email, password })
        console.log(login);

        const { accessToken } = login.data

        Cookies.set('token', accessToken)

        return accessToken

    } catch (error) {
        console.log("Error Login: ", error);
        throw error
    }
}

export default { Login }