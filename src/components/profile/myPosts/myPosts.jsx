import React from "react";
import styles from './styles.module.scss';
import Post from "./post/post";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';


const MyPosts = (props) => {
    let createReg = React.createRef();


    let updatePost = () => {
        props.addPost()

    }
    let onChangeValue = () => {
        let getValueRef = createReg.current.value
        props.updateNewPostText(getValueRef)
    }

    return (
        <div>
            My posts
            <div className={styles.postsWrapper}>
                <textarea placeholder="Share with your network..." onChange={onChangeValue} ref={createReg} value={props.newPostMessage}
                          />
                <Stack direction="row" spacing={2}>
                    <Button variant="contained" endIcon={<SendIcon/>} onClick={updatePost}>
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