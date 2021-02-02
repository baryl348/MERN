import React from 'react'
import LoginPage from '../../components/auth/login'


const Login: React.FC = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div><LoginPage /></div>
}
export default Login