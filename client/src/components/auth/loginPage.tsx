import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import { connect, useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from './login-resgistr.module.scss'
import { authLogin, checkUser } from '../../redux/auth-reducer/auth-reducer'
import { AppState } from '../../redux/redux-store'
import LoadingPage from '../../loading/loading'

interface PropsType {
    authLogin: (email: string, password: string) => void
    isLoading: boolean
}

const LoginPage: React.FC<PropsType> = ({ authLogin, isLoading }) => {
    console.log(isLoading, 'props')

    const dispatch = useDispatch()
    const test = () => {
        dispatch(checkUser())
    }
    useEffect(() => {
        (test())
    })
    const [issLoading, setIsLoading] = useState(isLoading ? true : false)
    return <div className={style.body}>
        <Formik
            initialValues={{ email: '', password: '' }}
            onSubmit={(values) => {
                setTimeout(() => {
                    console.log(JSON.stringify(values, null, 2));
                    authLogin(values.email, values.password)
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
                                <button type='submit' disabled={isSubmitting}>Login</button>
                                {isLoading ? <LoadingPage /> : null}
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
const mapStateToProps = (state: AppState) => ({
    isLoading: state.auth.isLoading
})
export default connect(mapStateToProps, { authLogin })(LoginPage)