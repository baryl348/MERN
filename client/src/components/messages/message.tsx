import React from 'react'
import style from './messages.module.scss'
import avatar from '../../IMG/avatar.jpg'

const Messages: React.FC = () => {
    return (
        <div className={style.chat}> <img src={avatar} alt="avatar" className={style.avatar} /> <div className={style.chatText}> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid cum fugit doloribus unde esse similique ipsum nesciunt, ad minima dicta quis recusandae maxime laborum nam praesentium cupiditate aut natus.</p>  </div><div className={style.chatText}> <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam aliquid cum fugit doloribus unde esse similique ipsum nesciunt, ad minima dicta quis recusandae maxime laborum nam praesentium cupiditate aut natus.</p>  </div>  </div>
    )
}
export default Messages