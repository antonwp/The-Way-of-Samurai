import classes from './Navbar.module.css';
import {NavLink} from "react-router-dom";

function Navbar() {
    return (
        <nav className={classes.nav}>
            <ul>
                <li>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link} to="/profile">
                        Профиль
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link} to="/dialogs">
                        Сообщения
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link} to="/users">
                        Пользователи
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link} to="/news">
                        Новости
                    </NavLink>
                </li>
                <li>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link} to="/music">
                        Музыка
                    </NavLink>
                </li>
            </ul>
            <ul>
                <li>
                    <NavLink className={navData => navData.isActive ? classes.active : classes.link} to="/settings">
                        Настройки
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;