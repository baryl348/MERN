import axios from "axios";


const instanceNotAuth = axios.create({
    baseURL: `http://localhost:5000/`,
    headers: {
        "Content-Type": "application/json"
    }
})
const instanceAuth = axios.create({
    baseURL: `http://localhost:5000/`,
    headers: {
        "Content-Type": "application/json",
        "authorization": `Bearer ${localStorage.getItem('token')}`
    }
})

export const auth = {
    async registration(firstName: string, secondName: string, email: string, password: string) {
        return (await instanceNotAuth.post('api/registration', { firstName, secondName, email, password })).data
    },
    async login(email: string, password: string) {
        return (await instanceNotAuth.post('api/login', { email, password })).data
    },
    async check() {
        return (await instanceAuth.get('api/user'))
    }
}
