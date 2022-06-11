import classes from './Post.module.css';

function Post(props) {
    return (
        <div className={classes.item}>
            <div className={classes.itemHeader}>
                <img className={classes.itemAva} src="img/ava-mini.jpg" alt="" />
                <div className={classes.itemName}>
                    <a href="/sauri">Sauri Nakamura</a>
                    <span>09.05.2022</span>
                </div>
            </div>
            <div className={classes.itemText}>
                {props.message}
            </div>
            <div className={classes.itemButtons}>
                <button className={classes.buttonLike}>+</button>
                <span className={classes.likeCounts}>{props.like}</span>
                <button className={classes.buttonDisLike}>-</button>
            </div>
        </div>
    );
}

export default Post;