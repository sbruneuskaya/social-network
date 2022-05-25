import React from "react";
import styles from './styles.module.scss';
import {NavLink} from "react-router-dom";



const UserItem = (props)=>{
    return(
        <div className={styles.usersItem}>
            <NavLink to={"/chat/" + props.id}>{props.name}</NavLink>
        </div>
    )
}

export default UserItem;