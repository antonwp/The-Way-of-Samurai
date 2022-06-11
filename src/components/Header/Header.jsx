import classes from './Header.module.css';
import {NavLink} from "react-router-dom";

function Header() {
    return (
        <header className={classes.header}>
            <div className="container">
            <div className={classes.header__wrapper}>
                <div className={classes.logo}>
                <NavLink to="/">
                    <img src="img/logo.png" alt="Social Media" />
                </NavLink>
                <p>Социальная сеть на React</p>
                </div>
            </div>
            </div>
        </header>
    );
}

export default Header;