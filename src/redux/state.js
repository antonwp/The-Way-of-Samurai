import classes from './../components/Dialogs/Dialogs.module.css';
import profileReducer from './profile-reducer';
import dialogsReducer from './dialogs-reducer';
import sidebarReducer from './sidebar-reducer';


let store = {
    _stateData: {
        profilePage: {
            postData: [
                {id: 1, postMessage: 'Новая запись', likesCount: 10},
                {id: 2, postMessage: 'Вторая запись', likesCount: 20},
                {id: 3, postMessage: 'Первая запись', likesCount: 300},
                {id: 3, postMessage: 'Еще одна записъ', likesCount: 404}
            ],
            newPostText: 'Что нового было сегодня?'
        },
        messagesPage: {
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
        },
        sidebar: {}
    },
    _callSubscriber() {
        console.log('State изменён');
    },

    getState() {
        return this._stateData;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },

    dispatch(action) {
        this._stateData.profilePage = profileReducer(this._stateData.profilePage, action);
        this._stateData.messagesPage = dialogsReducer(this._stateData.messagesPage, action);
        this._stateData.sidebar = sidebarReducer(this._stateData.sidebar, action);
        this._callSubscriber(this._stateData);
    }
}


export default store;
window.store = store;
