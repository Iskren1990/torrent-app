import { useContext, useState, useEffect } from 'react';

import style from './Profile.module.css';
import UserInfo from '../UserInfo';
import UserContextStore from '../../../UserContextStore';
import TorrentsList from '../../torrents/common/TorrentsList';
import TorrentService from '../../../services/torrents';
import Paginator from '../../common/Paginator';

const Profile = ({history}) => {
    const userData = useContext(UserContextStore);
    const [allTorrentsLit, setAllTorrentsLit] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        TorrentService.get(`uploader=${userData.id}&page=${page}&limit=10`)
        .then(torrentsArr => setAllTorrentsLit(torrentsArr))
    },[userData, page]);

    const handleClick = (e) => {
        setPage(e)
        history.push(`${history.location.pathname}?page=${e}&limit=20`)
    }
    
    return (
        <>
        <div className={style.Wrapper}>
            <UserInfo userData={userData} ></UserInfo>
            <TorrentsList 
            torrentsArr={allTorrentsLit} 
            heading={`${userData.username}'s uploaded torrents`} 
            />
            <Paginator filter={`torrents&uploader=${userData.id}`} onPageChange={e => handleClick(e.selected)} />
        </div>
        </>
    );
}

export default Profile;