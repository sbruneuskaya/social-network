import {SEND_MESSAGE, UPDATE_NEW_CHAT_TEXT} from "./action";

const chatReducer = (state, action) => {

    switch (action.type) {
        case UPDATE_NEW_CHAT_TEXT:
            state.newChatText = action.body;
            return state
        case SEND_MESSAGE:
            let body = state.newChatText
            state.newChatText = ''
            state.messages.push({
                id: 4,
                message: body
            })
            return state
        default:
            return state
    }

}

export default chatReducer