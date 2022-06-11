import classes from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

function DialogItem(props) {
    let path = `/dialogs/${props.id}`;
    return (
        <div className={classes.dialogs__item}>
            <NavLink className={navData => navData.isActive ? classes.active : classes.link} to={path}>
                {props.name}
            </NavLink>
        </div>
    );
}

export default DialogItem;