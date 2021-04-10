import { useState, useEffect } from 'react';
import style from './Torrents.module.css';
import TorrentsList from '../common/TorrentsList';
import TorrentService from '../../../services/torrents';
import Paginator from '../../common/Paginator';
import CommonSearch from '../../common/CommonSearch';

const Torrents = ({ history }) => {

    const [topTenDownloaded, setTopTenDownloaded] = useState([]);
    const [allTorrentsLit, setAllTorrentsList] = useState([]);
    const [page, setPage] = useState(0);
    const [query, setQuery] = useState('');

    useEffect(() => {
        TorrentService.get("downloads=-1&limit=10")
            .then(res => setTopTenDownloaded(res))
            .catch(console.log);
    }, []);

    useEffect(() => {
        TorrentService.get(`page=${page}&limit=20${query}`)
            .then(res => setAllTorrentsList(res))
            .catch(console.log);
    }, [page, query]);

    const handleClick = (e) => {
        setPage(e)
        history.push(`${history.location.pathname}?page=${e}&limit=20`)
    }
    // `&search=${data}`
    return (
        <div className={style.Wrapper}>
            <CommonSearch setData={data => setQuery(data)} />
            {
                page === 0 && <TorrentsList torrentsArr={topTenDownloaded} heading={"Top 10 Downloaded"} />
            }
            <TorrentsList torrentsArr={allTorrentsLit} heading={"Latest Uploaded Torrents"} />
            <Paginator filter={`torrents`} onPageChange={e => handleClick(e.selected)} />
        </div>
    );
}

export default Torrents;