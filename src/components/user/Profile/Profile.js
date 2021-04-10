import { useContext, useState, useEffect } from 'react';
import TorrentService from '../../../services/torrents';
import UserContextStore from '../../../context/UserContextStore';
import TosterContextStore from '../../../context/TosterContextStore';

import style from './Profile.module.css';
import UserInfo from '../UserInfo';
import TorrentsList from '../../torrents/common/TorrentsList';
import Paginator from '../../common/Paginator';
import CommonSearch from '../../common/CommonSearch';

const Profile = ({ history }) => {
    const { setToastrMsg } = useContext(TosterContextStore);
    const userData = useContext(UserContextStore);
    const [allTorrentsLit, setAllTorrentsLit] = useState([]);
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState('');

    useEffect(() => {
        TorrentService.get(`uploader=${userData.id}&page=${page}&limit=10${query}`)
            .then(torrentsArr => setAllTorrentsLit(torrentsArr))
            .catch(setToastrMsg);
    }, [page, query]);

    const handleClick = (e) => {
        setPage(e)
        history.push(`${history.location.pathname}?page=${e}&limit=20`)
    }

    return (
        <>
            <div className={style.Wrapper}>
                <UserInfo userData={userData} ></UserInfo>
                <CommonSearch setData={data => setQuery(data)} />
                <TorrentsList
                    torrentsArr={allTorrentsLit}
                    heading={`${userData.username}'s uploaded torrents`}
                />
                <Paginator
                    filter={`torrents&uploader=${userData.id}`}
                    onPageChange={e => handleClick(e.selected)}
                />
            </div>
        </>
    );
}

export default Profile;