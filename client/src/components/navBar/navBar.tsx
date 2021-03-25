import React from 'react'
import { NavLink } from 'react-router-dom'
import style from './navBar.module.scss'

const NavBar: React.FC = () => {
    return (
        <div className={style.body}><div className={style.navBar}>
            <NavLink to='/'>Корп.сообщения</NavLink>
            <NavLink to='/'>Сообщения</NavLink>
        </div></div>
    )
}
export default NavBar