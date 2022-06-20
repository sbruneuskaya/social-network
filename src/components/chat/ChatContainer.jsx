import React from "react";
import {addSendMessage, updateNewChatText} from "../../redux/actionCreator";
import Chat from "./Chat";


const ChatContainer = (props) => {
    let state = props.store.getState().chatPage

    const onSendMessageClick = () => {
        props.store.dispatch(addSendMessage())
    }

    const onNewMessageChange = (body) => {
        props.store.dispatch(updateNewChatText(body))
    }
    return (
        <Chat addSendMessage={onSendMessageClick}
              updateNewChatText={onNewMessageChange}
              chatPage={state}/>
    )
}

export default ChatContainer;