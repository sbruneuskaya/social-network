// import React from "react";
import {addSendMessage, updateNewChatText} from "../../redux/actionCreator";
import Chat from "./Chat";
import {connect} from "react-redux";


let mapStateToProps=(state)=>{
return{
    chatPage: state.chatPage
}
}

let mapDispatchToProps=(dispatch)=>{
return{
    addSendMessage:()=>{
        dispatch(addSendMessage())
    },
    updateNewChatText:(body)=>{
        dispatch(updateNewChatText(body))
    }
}
}

const ChatContainer=connect(mapStateToProps,mapDispatchToProps )(Chat)

export default ChatContainer;