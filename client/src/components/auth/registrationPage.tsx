import { Field, Form, Formik } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './login-resgistr.module.scss'

const RegistrationPage: React.FC = () => {
    return <div className={style.body}>
        <Formik
            initialValues={{ firstName: '', secondName: '', email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <div className={style.container}>
                    <div className={style.form}>
                        <h2>Registration form</h2>
                        <Form>
                            <div className={style.inputBox}>
                                <Field name='firstName' placeholder='FirstName' component='input' type='text' />
                            </div>
                            <div className={style.inputBox}>
                                <Field name='secondName' placeholder='SecondName' component='input' type='text' />
                            </div>
                            <div className={style.inputBox}>
                                <Field name='email' placeholder='Email' component='input' type='text' />
                            </div>
                            <div className={style.inputBox}>
                                <Field name='password' placeholder='Password' component='input' type='password' />
                            </div>
                            <div className={style.inputBox}>
                                <button type='submit' disabled={isSubmitting} >Registration</button>
                            </div>
                            <p>Already registered ? <NavLink to='/Login'>Click here</NavLink></p>
                        </Form>
                    </div>
                </div>
            )}
        </Formik>
    </div>
}
export default RegistrationPage