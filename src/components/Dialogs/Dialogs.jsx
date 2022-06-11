import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import MessageItem from './MessageItem/MessageItem';

function Dialogs(props) {

    let state = props.messagesPage;

    let dialogsElements = state.dialogsName.map( dialog => <DialogItem name={dialog.name} id={dialog.id} /> );

    let messagesElements = state.messagesData.map( message => <MessageItem text={message.message} messType={message.classname} />);

    let newMessageBody = state.newMessageBody;

    let onSendMessageClick = () => {
        props.sendMessage();
    }

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.updateNewMessageBody(body);
    }

    return (
        <div className={classes.dialogs}>
            <h3 className={classes.dialogs__title}>Диалоги</h3>
            <div className={classes.dialogs__wrapper}>
                <div className={classes.dialogs__list}>
                    {dialogsElements}
                </div>
                <div className={classes.dialogs__messages}>
                    {messagesElements}
                    <div>
                        <textarea
                            value={newMessageBody}
                            className={classes.dialogs__textarea}
                            placeholder='Напишите сообщение...'
                            onChange={onNewMessageChange} >
                        </textarea>
                        <button onClick={onSendMessageClick} className={classes.dialogs__sendButton}>Отправить</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;