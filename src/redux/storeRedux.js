import {combineReducers} from "redux";
import {legacy_createStore as createStore} from 'redux'
import profileReducer from "./profileReducer";
import chatReducer from "./chatReducer";

let rootReducer = combineReducers({
    profilePage: profileReducer,
    chatPage:chatReducer
})

let store = createStore(rootReducer);

export default store;