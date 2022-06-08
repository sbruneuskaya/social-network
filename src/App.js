import React from "react";
import styles from './App.module.scss';
import Header from "./components/header/Header";
import Profile from "./components/profile/Profile";
import NavBar from "./components/nav-bar/NavBar";
import Chat from "./components/chat/Chat";
import {BrowserRouter, Route} from 'react-router-dom';


const App = (props) => {
    return (
        <BrowserRouter>

            <div className={styles.appWrapper}>
                <Header/>
                <main className={styles.main}>
                    <NavBar/>
                        <Route path='/profile' render={()=><Profile statePageProfile={props.state.profilePage}
                                                                    dispatch={props.dispatch}/>} />
                        <Route path='/chat' render={()=> <Chat store={props.store}/>}/>
                </main>
            </div>

        </BrowserRouter>
    );
}

export default App;
