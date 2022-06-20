import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./action";

let initialState = {
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
}
const profileReducer = (state=initialState, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                mail: state.newPostText
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText : ''
            }
        case UPDATE_NEW_POST_TEXT:
            return{
                ...state,
                newPostText : action.newText,
            }
        default:
            return state
    }


}

export default profileReducer;