import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/storeRedux";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";


// let rerenderDom = () => {
    ReactDOM.render(
        <BrowserRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
// }
// rerenderDom()
// store.subscribe(rerenderDom)
// store.subscribe(()=>{
//     rerenderDom()
// })


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
