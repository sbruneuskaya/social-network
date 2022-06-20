import {SEND_MESSAGE, UPDATE_NEW_CHAT_TEXT} from "./action";

let initialState={
    user: [
        {
            id: 1,
            name: 'Ваня'
        },
        {
            id: 2,
            name: 'Катя'
        },
        {
            id: 3,
            name: 'Оля'
        },
        {
            id: 4,
            name: 'Марго'
        },
        {
            id: 5,
            name: 'Рома'
        },
    ],
    messages: [
        {
            id: 1,
            message: 'Привет'
        },
        {
            id: 2,
            message: 'Я улетаю на море'
        },
        {
            id: 3,
            message: 'И собираюсь посадить тую'
        },
    ],
    newChatText: '',
}
const chatReducer = (state=initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_CHAT_TEXT:
            return{
                ...state,
                newChatText:action.body
            }
        case SEND_MESSAGE:
            let body = state.newChatText
            return{
                ...state,
                newChatText : '',
                messages: [
                    ...state.messages,
                    {
                        id: 4,
                        message: body
                    }
                ]
            }
        default:
            return state
    }

}

export default chatReducer