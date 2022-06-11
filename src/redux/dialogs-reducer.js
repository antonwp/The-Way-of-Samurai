import classes from './../components/Dialogs/Dialogs.module.css';
const UPDATE_NEW_MESSAGE_BODY = 'UPDATE_NEW_MESSAGE_BODY';
const SEND_MESSAGE = 'SEND_MESSAGE';


let initialState = {
    dialogsName: [
        {id: 1, name: "Маша"},
        {id: 2, name: "Алена"},
        {id: 3, name: "Лена"},
        {id: 4, name: "Кира"},
        {id: 5, name: "Анна"}
    ],
    messagesData: [
        {id: 1, message: "привет", classname: classes.dialogs__message_i},
        {id: 2, message: "Как дела", classname: classes.dialogs__message_me},
        {id: 3, message: "Нормально", classname: classes.dialogs__message_i},
        {id: 4, message: "И я хорошо", classname: classes.dialogs__message_me},
        {id: 5, message: "что делаешь?", classname: classes.dialogs__message_i},
        {id: 6, message: "учу реакт", classname: classes.dialogs__message_me},
        {id: 7, message: "а я гуляю", classname: classes.dialogs__message_i},
        {id: 8, message: "где?", classname: classes.dialogs__message_me}
    ],
    newMessageBody: ""
}

const dialogsReducer = (state = initialState, action) => {

    let stateCopy = {
        ...state,
        messagesData: [...state.messagesData]
    };

    switch (action.type) {
        case UPDATE_NEW_MESSAGE_BODY: 
            stateCopy.newMessageBody = action.body;
            return stateCopy;
        case SEND_MESSAGE:
            let body = state.newMessageBody;
            stateCopy.newMessageBody = '';
            stateCopy.messagesData.push({
                id: 9, message: body
            });
            return stateCopy;
        default:
            return state;
    }
}

export const sendMessageCreator = () => {
    return {
        type: SEND_MESSAGE
    }
}

export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsReducer;