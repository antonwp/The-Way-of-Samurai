import classes from './Footer.module.css';

function Footer() {
    return (
        <footer className={classes.footer}>
            <div className="container">
                <div className={classes.footer__wrapper}>
                   &copy; 2022 Антон Лазаренко
                </div>
            </div>
        </footer>
    );
}

export default Footer;