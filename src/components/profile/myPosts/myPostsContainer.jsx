// import React from "react";
import {addPost, updateNewPostText} from "../../../redux/actionCreator";
import MyPosts from "./myPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//     let state=props.store.getState()
//
//     let createFunc = () => {
//         props.store.dispatch(addPost())
//
//     }
//     let onChangeValue = (getValueRef) => {
//         props.store.dispatch(updateNewPostText(getValueRef))
//     }
//
//     return (
//        <MyPosts updateNewPostText={onChangeValue}
//                 addPost={createFunc}
//                 posts={state.profilePage.posts}
//                 newPostMessage={state.profilePage.newPostText}/>
//     )
// }

let mapStateToProps=(state)=>{
    return{
        posts: state.profilePage.posts,
        newPostMessage: state.profilePage.newPostText
    }
}

let mapDispatchToProps=(dispatch)=>{
    return{
        updateNewPostText:(getValueRef)=>{
            dispatch(updateNewPostText(getValueRef))
        },
        addPost:()=>{
            dispatch(addPost())
        }
    }
}

const MyPostsContainer=connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;