import React from "react";
import styles from './styles.module.scss';
import MyPosts from "./myPosts/myPosts";

const Profile = () => {
    return (
        <div className={styles.content}>
            <div className={styles.contentImg}>
                <img
                    src="https://uraloved.ru/images/mesta/chel-obl/zuratkul/moskal-1.jpg"
                    alt="logo"/>
            </div>
            <div>
                avatar+description
            </div>
            <MyPosts/>
        </div>
    )
}

export default Profile;