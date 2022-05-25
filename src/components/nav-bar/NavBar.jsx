import React from "react";
import styles from './styles.module.scss';
import {NavLink} from "react-router-dom";

const NavBar = () => {


    return (
        <nav className={styles.nav}>
            <div className={styles.navItem}><NavLink to="/profile"  className={styles.item} activeClassName={styles.active}>Profile</NavLink></div>
            <div className={styles.navItem}><NavLink to="/chat"  className={ styles.item} activeClassName={styles.active}>Chat</NavLink></div>
            <div className={styles.navItem}><NavLink to="/news"  className={styles.item} activeClassName={styles.active}>News</NavLink></div>
            <div className={styles.navItem}><NavLink to="/musik"  className={styles.item} activeClassName={styles.active}>Music</NavLink></div>
            <div className={styles.navItem}><NavLink to="/settings"  className={styles.item} activeClassName={styles.active}>Settings</NavLink></div>
        </nav>
    )
}

export default NavBar;