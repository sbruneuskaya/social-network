import React from "react";
import styles from './styles.module.scss';
import Post from "./post/post";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import {addPost, updateNewPostText} from "../../../redux/state";


// const addPost=()=>{
//     return {type:'ADD-POST'}
// }
//
// const updateNewPostText=(getValueRef)=>{
//     return {type:'UPDATE-NEW-POST-TEXT', newText: getValueRef}
// }

const MyPosts = (props) => {
    let createReg = React.createRef();
    let createFunc = () => {
        props.dispatch(addPost())

    }
    let onChangeValue = () => {
        let getValueRef = createReg.current.value
        props.dispatch(updateNewPostText(getValueRef))
    }

    return (
        <div>
            My posts
            <div className={styles.postsWrapper}>
                <textarea placeholder="Share with your network..." onChange={onChangeValue} ref={createReg} value={props.newPostMessage}
                          />
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" endIcon={<SendIcon/>} onClick={createFunc}>
                        Send
                    </Button>
                </Stack>
            </div>
            {props.posts.map(el =>
                <Post mail={el.mail}/>
            )}
        </div>
    )
}

export default MyPosts;