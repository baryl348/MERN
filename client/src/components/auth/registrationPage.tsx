import { Field, Form, Formik } from 'formik'
import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'
import style from './login-resgistr.module.scss'
import { authRegistration } from '../../redux/auth-reducer/auth-reducer'
import { AppState } from '../../redux/redux-store'
import LoadingPage from '../../loading/loading'

interface PropsType {
    authRegistration: (firstName: string, secondName: string, password: string, email: string) => void
    isLoading: boolean
}

const RegistrationPage: React.FC<PropsType> = ({ authRegistration, isLoading }) => {
    return <div className={style.body}>
        <Formik
            initialValues={{ firstName: '', secondName: '', email: '', password: '' }}
            onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                    // console.log(JSON.stringify(values, null, 2));
                    console.log(values.firstName, values.secondName, values.email, values.password)
                    authRegistration(values.firstName, values.secondName, values.email, values.password)
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
                                {isLoading ? <LoadingPage /> : null}
                            </div>
                            <p>Already registered ? <NavLink to='/Login'>Click here</NavLink></p>
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
export default connect(mapStateToProps, { authRegistration })(RegistrationPage)