import React from 'react'
import RegistrationPage from '../../components/auth/registration'

const Registration: React.FC = () => {
    const onSubmit = (formData: any) => {
        console.log(formData)
    }
    return <div><RegistrationPage /></div>
}
export default Registration