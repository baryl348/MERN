import React from 'react'
import myAvatar from '../../IMG/myAvatar.jpg'
import style from './myMessage.module.scss'

const Mymessages: React.FC = () => {
    return (
        <div className={style.chat}> <img src={myAvatar} alt="MyAvatar" className={style.avatar} />
            <div className={style.chatText}> <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolore libero a ipsam repellat reiciendis laboriosam, aperiam laudantium dicta eos, at corrupti rerum placeat ducimus, delectus fugit expedita. Quas, quo ut?</p>  </div>
        </div>
    )
}
export default Mymessages