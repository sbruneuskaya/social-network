import {ADD_POST, UPDATE_NEW_POST_TEXT} from "./action";


const profileReducer = (state, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                mail: state.newPostText
            }
            state.posts.push(newPost)
            state.newPostText = '';
            return state
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state
        default:
            return state
    }


}

export default profileReducer;