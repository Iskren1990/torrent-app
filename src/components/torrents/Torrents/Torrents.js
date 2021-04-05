import { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import style from './Torrents.module.css';
import TorrentsList from '../common/TorrentsList';
import TorrentService from '../../../services/torrents';

const Torrents = ({ history }) => {
    const [topTenDownloaded, setTopTenDownloaded] = useState([]);
    const [allTorrentsLit, setAllTorrentsList] = useState([]);
    const [page, setPage] = useState(0);

    useEffect(() => {
        TorrentService.get("downloads=-1&limit=10")
            .then(res => setTopTenDownloaded(res))
            .catch(console.log);
            // req for torrents count
    }, []);

    useEffect(() => {
        TorrentService.get(`page=${page}&limit=20`)
            .then(res => setAllTorrentsList(res))
            .catch(console.log);
    }, [page]);

    const handleClick = (e) => {
        setPage(e)
        history.push(`${history.location.pathname}?page=${e}&limit=20`)
    }
    return (
        <div className={style.Wrapper}>
            {
                page === 0 && <TorrentsList torrentsArr={topTenDownloaded} heading={"Top 10 Downloaded"} />
            }
            <TorrentsList torrentsArr={allTorrentsLit} heading={"Latest Uploaded Torrents"} />
            <ReactPaginate
                previousLabel={'previous'}
                nextLabel={'next'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={20}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={e => handleClick(e.selected)}
                containerClassName={style.Paginate}
                activeClassName={style.Active}
            />
        </div>
    );
}

export default Torrents;