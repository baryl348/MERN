import React from 'react'
import { NavLink } from 'react-router-dom'
import { reduxForm } from 'redux-form'
import { createField, Input } from '../../common/form-control'
import style from './login-resgistr.module.scss'

const LoginPage: React.FC = () => {
    return <div className={style.body}><div className={style.container}>
        <div className={style.form}>
            <h2>Registration form</h2>
            <form>
                <div className={style.inputBox}>
                    {createField('FirstName', 'firstName', [], Input, 'text')}
                </div>
                <div className={style.inputBox}>
                    {createField('SecondName', 'secondName', [], Input, 'text')}
                </div>
                <div className={style.inputBox}>
                    {createField('Email', 'email', [], Input, 'text')}
                </div>
                <div className={style.inputBox}>
                    {createField('Password', 'password', [], Input, 'password')}
                </div>
                <div className={style.inputBox}>
                    <button type='submit'>Login</button>
                </div>
                <p>Forget password ? <NavLink to='#'>Click here</NavLink></p>
            </form>
        </div>
    </div>
    </div>
}
export default reduxForm({ form: 'LOGIN_PAGE' })(LoginPage)