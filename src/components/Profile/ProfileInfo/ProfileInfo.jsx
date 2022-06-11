import classes from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <img src="img/profile-bg.jpg" className={classes.profileHeaderImg} alt="profile Bg"/>
            <div className={classes.profileWrapper}>
                <div className={classes.profileAva}>
                    <img src="img/ava-big.jpg" className={classes.profileAvaImg} alt="profile Ava"/>
                </div>
                <div className={classes.profileDesc}>
                    Sauri Nakamura
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;