import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post'

function MyPosts(props) {

    let postsElements = props.postData.map( p => <Post message={p.postMessage} like={p.likesCount} />);

    let newPostElement = React.createRef();

    let onAddPost = () => {
        props.addPost();
    }
    
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }

    return (
        <div>
            <div><h4>Мои записи</h4></div>
                <div className={classes.textarea}>
                    <textarea onChange={onPostChange} ref={newPostElement} value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Добавить запись</button>
                </div>
            <div className={classes.posts}>
                {postsElements}
            </div>
        </div>
    );
}

export default MyPosts;