import { useState } from 'react';

import style from './UserInfo.module.css';
import CommonImage from '../../common/CommonImage';
import CommonInput from '../../common/CommonInput';
import spaceLeader from '../../../assets/space-leader.svg';
import SubmitBtn from '../../common/SubmitBtn';
import ScreenshotsUpload from '../../torrents/UploadTorrent/ScreenshotsUpload'

let avatar = false//"https://images.unsplash.com/photo-1542103749-8ef59b94f47e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8cGVyc29ufGVufDB8fDB8&ixlib=rb-1.2.1&w=1000&q=80"

const UserInfo = () => {
    const [username, setUsername] = useState("Genadi");
    const [email, setEmail] = useState("Icko@abv.bg");
    const [age, setAge] = useState("");
    const [isNotEdditable, setIsNotEdditable] = useState(true);

    const editHandler = (e) => {
        setIsNotEdditable(!isNotEdditable);
    }

    const editInfoSubmitHandler = (e) => {
        e.preventDefault();
    }

    const setAvatar = () => {
        avatar=""
    }

    return (
        <form onSubmit={editInfoSubmitHandler}>
            <CommonImage src={avatar || spaceLeader} style={style.Img} alt={"User Picture"} />
            {isNotEdditable || <ScreenshotsUpload setPic={setAvatar} single={false} />}
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
            <SubmitBtn value={isNotEdditable ? "Edit" : "Cancel"} type={"button"} onClick={(e) => editHandler(e)} />
            {isNotEdditable || <SubmitBtn value={"Save"} />}
        </form>
    );
}

export default UserInfo;