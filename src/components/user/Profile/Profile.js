import style from './Profile.module.css';

import UserInfo from '../UserInfo';

const Profile = () => {

    return (
        <div className={style.Wrapper}>
            <UserInfo></UserInfo>

        </div>
    );
}

export default Profile;