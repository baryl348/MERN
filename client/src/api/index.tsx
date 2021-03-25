import axios from "axios";


const instanceNotAuth = axios.create({
    baseURL: `http://localhost:4000/`,
    headers: {
        "Content-Type": "application/json"
    }
})

export const auth = {
    async registration(email: string, password: string, firstName: string, secondName: string) {
        return (await instanceNotAuth.post('api/auth/registration', { email, password, firstName, secondName })).data
    }
}