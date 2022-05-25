import React from "react";
import styles from './styles.module.scss';
import UserItem from "./userItem/UserItem";
import MessageItem from "./messageItem/MessageItem";



const Chat = (props) => {
    return (
        <div className={styles.wrapper}>
            <div className={styles.users}>
                <h2>Chats</h2>
                <input type={"search"} placeholder={'search'}/>
                {props.statePage.user.map(item =>
                        <UserItem name={item.name} id={item.id}/>
                )}
            </div>
            <div className={styles.message}>
                {props.statePage.messages.map(el=>
                    <MessageItem message={el.message}/>
                )}
            </div>
        </div>
    )
}

export default Chat;