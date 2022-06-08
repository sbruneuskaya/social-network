import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";


let store = {
    _state: {
        chatPage: {
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
        },
        profilePage: {
            posts: [
                {
                    id: 1,
                    mail: 'Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem I psum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.'
                },
                {
                    id: 2,
                    mail: 'Hello, it`s perfect post'
                },
                {
                    id: 3,
                    mail: 'ahahahahahaha'
                },
                {
                    id: 4,
                    mail: 'Hello'
                },
                {
                    id: 5,
                    mail: 'ok'
                },
            ],
            newPostText: 'Света привет'
        },

    },
    getState() {
        return this._state
    },
    _getNewSubscriber() {
        console.log('state changed')
    },
    subscribe(observer) {
        this._getNewSubscriber = observer;
    },

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action)
        this._state.chatPage = chatReducer(this._state.chatPage, action)
        this._getNewSubscriber(this._state)
    }
}

export default store;


window.store = store