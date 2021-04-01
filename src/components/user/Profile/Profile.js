import { useContext } from 'react';


import style from './Profile.module.css';
import UserInfo from '../UserInfo';
import UserContextStore from '../../../UserContextStore';

const Profile = () => {
    const userData = useContext(UserContextStore);
    
    return (
        <div className={style.Wrapper}>
            <UserInfo userData={userData} ></UserInfo>

        </div>
    );
}

export default Profile;