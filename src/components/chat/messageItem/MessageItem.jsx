import React from "react";
import styles from './styles.module.scss';



const MessageItem=(props)=>{
    return(
        <div className={styles.messageItem}>{props.message}</div>
    )
}

export default MessageItem;