import React from 'react'
import style from './loader.module.scss'

const LoadingPage: React.FC = () => {
    return (
        <div className={style.body}>
            <div className={style.loader}><h2>Loading...</h2></div>
        </div>
    )
}
export default LoadingPage