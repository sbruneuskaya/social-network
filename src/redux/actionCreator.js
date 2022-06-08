import {ADD_POST, SEND_MESSAGE, UPDATE_NEW_CHAT_TEXT, UPDATE_NEW_POST_TEXT} from "./action";

export const addPost = () => {
    return {type: ADD_POST}
}

export const updateNewPostText = (getValueRef) => {
    return {type: UPDATE_NEW_POST_TEXT, newText: getValueRef}
}

export const addSendMessage = () => {
    return {type: SEND_MESSAGE}
}

export const updateNewChatText = (body) => {
    return {type: UPDATE_NEW_CHAT_TEXT, body: body}
}