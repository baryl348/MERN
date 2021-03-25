import { Field, Form, Formik } from 'formik'
import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './login-resgistr.module.scss'


const LoginPage: React.FC = () => {
    return <div className={style.body}>
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));

                }, 400);
            }}
        >
            {({ isSubmitting }) => (
                <div className={style.container}>
                    <div className={style.form}>
                        <h2>Login form</h2>

                        <Form>
                            <div className={style.inputBox}>
                                <Field name='email' placeholder='Email' component='input' type='text' />
                            </div>
                            <div className={style.inputBox}>
                                <Field name='password' placeholder='Password' component='input' type='password' />
                            </div>
                            <div className={style.inputBox}>
                                <button type='submit' disabled={isSubmitting} >Login</button>
                            </div>
                            <p>Forget password ? <NavLink to='#'>Click here</NavLink></p>
                            <p>Not registered ? <NavLink to='/Registration'>Click here</NavLink></p>
                        </Form>

                    </div>
                </div>
            )}
        </Formik>
    </div>
}
export default LoginPage