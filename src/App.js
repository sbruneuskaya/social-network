import React from "react";
import styles from './App.module.scss';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import NavBar from "./components/nav-bar/NavBar";

import { Route} from 'react-router-dom';
import ChatContainer from "./components/chat/ChatContainer";


const App = (props) => {
    return (
            <div className={styles.appWrapper}>
                <Header/>
                <main className={styles.main}>
                    <NavBar/>
                        <Route path='/profile' render={()=><Profile store={props.store}/>} />
                        <Route path='/chat' render={()=> <ChatContainer store={props.store}/>}/>
                </main>
            </div>
    );
}

export default App;
