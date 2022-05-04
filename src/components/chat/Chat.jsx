import React from "react";
import styles from './styles.module.scss';
import classNames from "classnames";

const Chat=()=>{
    return(
        <div>
            <div className={styles.users}>
                <div className={styles.usersItem}>Ваня</div>
                <div className={classNames(styles.usersItem, styles.active)}>Катя</div>
                <div className={styles.usersItem}>Оля</div>
                <div className={styles.usersItem}>Марго</div>
                <div className={styles.usersItem}>Рома</div>
            </div>
            <div className={styles.message}>
                <div className={styles.messageItem}>Привет</div>
                <div className={styles.messageItem}>Я улетаю на море</div>
                <div className={styles.messageItem}>И собираюсь посадить тую</div>
            </div>
        </div>
    )
}

export default Chat;