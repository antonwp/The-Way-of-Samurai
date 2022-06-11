import classes from '../Dialogs.module.css';

function MessageItem(props) {
    return (
        <div className={props.messType}>
            <div className={classes.dialogs__message}>
                {props.text}
            </div>
        </div>
    );
}
export default MessageItem;