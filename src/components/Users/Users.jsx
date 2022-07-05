import * as axios from 'axios';
import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../img/users-ava/3.jpg';

function Users(props) {
    if (props.users.length === 0) {

        axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
        });

        
    }
    
    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <div>
                    <div>
                        <img className={classes.userAvaImg} src={u.photos.small != null ? u.photos.small : userPhoto} alt={u.name} />
                    </div>
                    <div>
                        { u.followed
                         ? <button onClick={() => {props.unfollow(u.id)}}>Отписаться</button> 
                         : <button onClick={() => {props.follow(u.id)}}>Подписаться</button> }
                    </div>
                </div>
                <div>
                    <div>{u.name}</div> 
                    <div>{u.status}</div>
                    <div>{"u.location.country"}</div>
                    <div>{"u.location.city"}</div>
                </div>
            </div>)
        }
    </div>
}

export default Users;