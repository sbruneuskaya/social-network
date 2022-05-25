import React from "react";
import styles from './styles.module.scss';
import MyPosts from "./myPosts/myPosts";

const Profile = (props) => {
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
            <MyPosts posts={props.statePageProfile.posts}
                     newPostMessage={props.statePageProfile.newPostText}
                     dispatch={props.dispatch}/>
        </div>
    )
}

export default Profile;