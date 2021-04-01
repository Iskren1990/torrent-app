import { useState } from 'react';

import style from './UserInfo.module.css';
import CommonImage from '../../common/CommonImage';
import CommonInput from '../../common/CommonInput';
import spaceLeader from '../../../assets/space-leader.svg';
import SubmitBtn from '../../common/SubmitBtn';
import ScreenshotsUpload from '../../common/ScreenshotsUpload';

const UserInfo = (userData) => {
    userData = {...userData.userData}
    const [username, setUsername] = useState(userData.username);
    const [email, setEmail] = useState(userData.email);
    const [age, setAge] = useState(userData.age);
    const [picUrls, setPicUrls] = useState(userData.avatar || spaceLeader);
    const [isNotEdditable, setIsNotEdditable] = useState(true);
    const [screenshotsFile, setScreenshotsFile] = useState({})

    const editBtnHandler = (e) => {
        setIsNotEdditable(!isNotEdditable);
    }

    const editInfoSubmitHandler = (e) => {
        e.preventDefault();
    }
    
    return (
        <form onSubmit={editInfoSubmitHandler}>
            <CommonImage src={picUrls} style={style.Img} alt={"User Picture"} />
            {
                isNotEdditable
                || <ScreenshotsUpload
                    setPicUrls={e => setPicUrls(e)}
                    setPicsForUpload={e => setScreenshotsFile(e)}
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