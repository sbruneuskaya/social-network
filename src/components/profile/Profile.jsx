import React from "react";
import styles from './styles.module.scss';
// import MyPosts from "./myPosts/myPosts";
import MyPostsContainer from "./myPosts/myPostsContainer";
// import './../../redux/store'

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
            <MyPostsContainer store={props.store} />
        </div>
    )
}

export default Profile;