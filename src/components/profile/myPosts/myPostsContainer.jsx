import React from "react";
import {addPost, updateNewPostText} from "../../../redux/actionCreator";
import MyPosts from "./myPosts";


const MyPostsContainer = (props) => {
    let state=props.store.getState()

    let createFunc = () => {
        props.store.dispatch(addPost())

    }
    let onChangeValue = (getValueRef) => {
        props.store.dispatch(updateNewPostText(getValueRef))
    }

    return (
       <MyPosts updateNewPostText={onChangeValue}
                addPost={createFunc}
                posts={state.profilePage.posts}
                newPostMessage={state.profilePage.newPostText}/>
    )
}

export default MyPostsContainer;