import { useState } from 'react';

import style from './UserInfo.module.css';
import CommonImage from '../../common/CommonImage';
import CommonInput from '../../common/CommonInput';
import spaceLeader from '../../../assets/space-leader.svg';
import SubmitBtn from '../../common/SubmitBtn';
import ScreenshotsUpload from '../../common/ScreenshotsUpload';


import UserService from '../UserSrevice';

const UserInfo = (userData) => {
    userData = { ...userData.userData }

    const [username, setUsername] = useState(userData.username);
    const [email, setEmail] = useState(userData.email);
    const [age, setAge] = useState(userData.age);
    const [avatar, setAvatar] = useState(userData.avatar);
    const [isNotEdditable, setIsNotEdditable] = useState(true);

    const editBtnHandler = (e) => {
        setIsNotEdditable(!isNotEdditable);
    }

    const editInfoSubmitHandler = (e) => {
        e.preventDefault();
        UserService.editProfile({ username, email, age, avatar })
            .then(setIsNotEdditable(true))
            .then(userData.updateUserInfo())
            .catch(console.log)
    }

    return (
        <form onSubmit={editInfoSubmitHandler}>
            <CommonImage src={avatar} style={style.Img} alt={"User Picture"} fallback={() => setAvatar(spaceLeader)} />
            {
                isNotEdditable
                || <ScreenshotsUpload
                    setPicUrls={e => setAvatar(e)}
                    single={false}
                />
            }
            <CommonInput
                value={username}
                id={username}
                label={"Username"}
                onChange={e => setUsername(e.target.value)}
                readonly={isNotEdditable}
            />
            <CommonInput
                value={email}
                id={"email"}
                label={"Email"}
                onChange={e => setEmail(e.target.value)}
                readonly={isNotEdditable}
            />
            <CommonInput
                type="number"
                value={age}
                id={"age"}
                label={"Age"}
                onChange={e => setAge(e.target.value)}
                readonly={isNotEdditable}
            />
            <SubmitBtn
                value={isNotEdditable ? "Edit" : "Cancel"}
                type={"button"}
                onClick={(e) => editBtnHandler(e)}
            />
            {isNotEdditable || <SubmitBtn value={"Save"} />}
        </form>
    );
}

export default UserInfo;