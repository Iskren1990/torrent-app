import { useState, useContext } from 'react';
import TosterContextStore from '../../../TosterContextStore'
import fieldValidator from '../../../utils/fieldValidation';

import style from './UserInfo.module.css';
import CommonImage from '../../common/CommonImage';
import CommonInput from '../../common/CommonInput';
import spaceLeader from '../../../assets/space-leader.svg';
import SubmitBtn from '../../common/SubmitBtn';
import ScreenshotsUpload from '../../common/ScreenshotsUpload';

import UserService from '../UserSrevice';

const UserInfo = (userData) => {
    userData = { ...userData.userData }

    const { setToastrMsg } = useContext(TosterContextStore);
    const [username, setUsername] = useState(userData.username);
    const [email, setEmail] = useState(userData.email);
    const [age, setAge] = useState(userData.age);
    const [avatar, setAvatar] = useState(userData.avatar);
    const [isNotEdditable, setIsNotEdditable] = useState(true);
    const [disabled, disableSave] = useState(false);

    const editBtnHandler = (e) => {
        setIsNotEdditable(!isNotEdditable);
    }

    const editInfoSubmitHandler = (e) => {
        e.preventDefault();

        const [err, errCont] = fieldValidator({ username, email, age, avatar });
        if (err) return setToastrMsg(errCont);

        UserService.editProfile({ username, email, age, avatar })
            .then(setIsNotEdditable(true))
            .then(userData.updateUserInfo())
            .then(res => {
                if (res.message) throw new Error(res.message);
                userData.logIn(res)
            })
            .catch(x => setToastrMsg(x.message));
    }

    return (
        <form className={style.UserData} onSubmit={editInfoSubmitHandler}>
            <CommonImage src={avatar} style={style.Img} alt={"User Picture"} fallback={() => setAvatar(spaceLeader)} />
            {
                isNotEdditable
                || <ScreenshotsUpload
                    setPicUrls={picUrlArr => setAvatar(...picUrlArr)}
                    single={false}
                    setUploadBtn={bool => disableSave(bool)}
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
            {isNotEdditable || <SubmitBtn disabled={disabled} value={"Save"} />}
        </form>
    );
}

export default UserInfo;