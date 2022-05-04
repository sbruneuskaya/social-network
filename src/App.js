import React from "react";
import styles from './App.module.scss';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import NavBar from "./components/nav-bar/NavBar";
import Chat from "./components/chat/Chat";
import {BrowserRouter, Route, Switch} from 'react-router-dom';


const App = () => {
    return (
        <BrowserRouter>

            <div className={styles.appWrapper}>
                <Header/>
                <main className={styles.main}>
                    <NavBar/>
                        <Route path='/profile' component={Profile} />
                        <Route path='/Chat' component={Chat}/>
                </main>
            </div>

        </BrowserRouter>
    );
}

export default App;
