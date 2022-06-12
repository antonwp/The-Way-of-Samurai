import React from 'react';
import classes from './Users.module.css';

function Users(props) {
    if (props.users.length === 0) {
        props.setUsers(
            [
                {
                    id: 1,
                    photoUrl: '/img/users-ava/1.jpg',
                    followed: false,
                    fullName: 'Sauri',
                    status: 'Цитата - статус',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 2,
                    photoUrl: '/img/users-ava/2.jpg',
                    followed: true,
                    fullName: 'Lera',
                    status: 'Цитата - статус',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 3,
                    photoUrl: '/img/users-ava/3.jpg',
                    followed: false,
                    fullName: 'Anna',
                    status: 'Цитата - статус',
                    location: {city: 'Moscow', country: 'Russia'}
                },
                {
                    id: 4,
                    photoUrl: '/img/users-ava/4.jpg',
                    followed: true,
                    fullName: 'Yana',
                    status: 'Цитата - статус',
                    location: {city: 'Moscow', country: 'Russia'}
                },
            ]
        );
    }
    
    return <div>
        {
            props.users.map( u => <div key={u.id}>
                <div>
                    <div>
                        <img className={classes.userAvaImg} src={u.photoUrl} alt={u.fullName} />
                    </div>
                    <div>
                        { u.followed
                         ? <button onClick={() => {props.unfollow(u.id)}}>Отписаться</button> 
                         : <button onClick={() => {props.follow(u.id)}}>Подписаться</button> }
                    </div>
                </div>
                <div>
                    <div>{u.fullName}</div> 
                    <div>{u.status}</div>
                    <div>{u.location.country}</div>
                    <div>{u.location.city}</div>
                </div>
            </div>)
        }
    </div>
}

export default Users;