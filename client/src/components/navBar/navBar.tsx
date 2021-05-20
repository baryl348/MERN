import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { checkUser } from '../../redux/auth-reducer/auth-reducer'
import style from './navBar.module.scss'

const NavBar: React.FC = () => {
    const dispatch = useDispatch()
    const test = () => {
        dispatch(checkUser())
    }
    useEffect(() => {
        (test())
    })
    return (
        <div className={style.body}><div className={style.navBar}>
            <NavLink to='/'>Корп.сообщения</NavLink>
            <NavLink to='/'>Сообщения</NavLink>
        </div></div>
    )
}
export default NavBar