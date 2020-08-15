import axios from 'axios'
import Cookies from 'js-cookie'
import moment from 'moment'

export async function Login(email, password) {
    try {
        let login = await axios.post('account/login', { email, password })

        const { accessToken, expiration } = login.data

        Cookies.set('token', accessToken)
        Cookies.set('expirationToken', expiration)

        return accessToken

    } catch (error) {
        console.log("Error Login: ", error);
        throw error
    }
}

export async function LogOut() {
    Cookies.remove('token')
    Cookies.remove('expirationToken')
    return true
}

export async function GetSession() {
    try {
        const token = Cookies.get('token')
        const expirationToken = Cookies.get('expirationToken')

        let dateNow = moment(new Date()).format('YYYY-MM-DD HH:mm:ss')

        if (token && expirationToken > dateNow) {
            return true
        } else {
            LogOut()
            return false
        }

    } catch (error) {
        console.log("Error GetSession: ", error)
    }
}

export default { Login, LogOut, GetSession }