import axios from "axios";


const instanceNotAuth = axios.create({
    baseURL: `http://localhost:4000/`,
    headers: {
        "Content-Type": "application/json"
    }
})

export const auth = {
    async registration(firstName: string, secondName: string, email: string, password: string) {
        return (await instanceNotAuth.post('api/auth/registration', { firstName, secondName, email, password })).data
    },
    async login(email: string, password: string) {
        return (await instanceNotAuth.post('api/auth/login', { email, password }))
    }
}