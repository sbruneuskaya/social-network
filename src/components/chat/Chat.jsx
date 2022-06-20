import React from "react";
import styles from './styles.module.scss';
import UserItem from "./userItem/UserItem";
import MessageItem from "./messageItem/MessageItem";
import {addSendMessage, updateNewChatText} from "../../redux/actionCreator";


const Chat = (props) => {
    let state = props.chatPage

    const onSendMessageClick = () => {
        props.addSendMessage()
    }

    const onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewChatText(body)
    }
    return (
        <div className={styles.wrapper}>
            <div className={styles.users}>
                <h2>Chats</h2>
                <input type={"search"} placeholder={'search'}/>
                {state.user.map(item =>
                    <UserItem name={item.name} id={item.id}/>
                )}
            </div>
            <div className={styles.message}>
                <div className={styles.message}>
                    {state.messages.map(el =>
                        <MessageItem message={el.message}/>
                    )}
                </div>

                <div>
                    <div><textarea value={state.newChatText} onChange={onNewMessageChange}
                                   placeholder="your message"/></div>
                    <div>
                        <button onClick={onSendMessageClick}>Send</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Chat;