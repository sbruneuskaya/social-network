import React from 'react';
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./redux/state";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';



let rerenderDom = (state) => {
    ReactDOM.render(
        <App state={state} dispatch={store.dispatch.bind(store)} store={store}/>,
        document.getElementById('root')
    );
}
rerenderDom(store.getState())
store.subscribe(rerenderDom)


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
