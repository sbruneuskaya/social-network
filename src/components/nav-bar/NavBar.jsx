import React from "react";
import styles from './styles.module.scss';
import {NavLink} from "react-router-dom";

const NavBar = () => {


    return (
        <nav className={styles.nav}>
            <div><NavLink to="/profile"  className={styles.item} activeClassName={styles.active}>Profile</NavLink></div>
            <div><NavLink to="/chat"  className={ styles.item} activeClassName={styles.active}>Chat</NavLink></div>
            <div ><NavLink to="/news"  className={styles.item} activeClassName={styles.active}>News</NavLink></div>
            <div ><NavLink to="/musik"  className={styles.item} activeClassName={styles.active}>Music</NavLink></div>
            <div ><NavLink to="/settings"  className={styles.item} activeClassName={styles.active}>Settings</NavLink></div>
        </nav>
    )
}

export default NavBar;