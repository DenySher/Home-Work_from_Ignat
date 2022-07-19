import React from 'react'
import style from './Message.module.css'

type PropsMassagesDate = {
    avatar: string,
    name: string,
    message: string,
    time: string,
}

function Message(props: PropsMassagesDate) {
    return (
        <div className={style.container}>
            <div className={style.Img}><img className={style.avatar} src={props.avatar} /></div>
            <div className={style.messageText}>
                <div className={style.nameMessage}>
                    <h3 className={style.name}>{props.name}</h3>
                    <h3 className={style.message}>{props.message}</h3>
                </div>
                <div className={style.time}><h3>{props.time}</h3></div>
            </div>
        </div>
    )
}

export default Message
