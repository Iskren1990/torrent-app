import { useState, useEffect } from 'react';
import style from './Torrents.module.css';
import TorrentsList from '../common/TorrentsList';
import TorrentService from '../../../services/torrents';

const Torrents = ({ location }) => {
    const [topTenDownloaded, setTopTenDownloaded] = useState([]);
    const [allTorrentsLit, setAllTorrentsList] = useState([]);

    useEffect(() => {
        TorrentService.get("downloads=1&limit=10")
            .then(res => setTopTenDownloaded(res))
            .catch(console.log);
        TorrentService.get("page=0&limit=20")
            .then(res => setAllTorrentsList(res))
            .catch(console.log);
    }, [])
    return (
        <div className={style.Wrapper}>
        <TorrentsList torrentsArr={topTenDownloaded} heading={"Top 10 Downloaded"}/>
        <TorrentsList torrentsArr={allTorrentsLit} heading={"Latest Uploaded Torrents"}/>
        </div>
    );
}

export default Torrents;