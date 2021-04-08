import { useEffect, useState, useContext } from "react";
import { Link } from 'react-router-dom'

import style from './Torrent.module.css';
import TorrentService from '../../../services/torrents';
import MovieInfoWrapper from '../../common/MovieInfoWrapper';
import CommonTitle from '../../common/CommonTitle';
import DescriptionField from '../../common/DescriptionField';
import Video from '../../common/Video';
import SubmitBtn from '../../common/SubmitBtn';
import ScreenshotsSection from '../../common/ScreenshotsSection';
import UserContextStore from '../../../context/UserContextStore';

const Torrent = ({ history, match }) => {
    const userData = useContext(UserContextStore);
    const [movieData, setMovieData] = useState({});
    const [torrentData, setTorrentData] = useState({});
    const [isOwner, setisOwner] = useState(false);

    const query = match.params.id + history.location.search;

    useEffect(() => {
        TorrentService.getOne(query)
            .then(x => {
                setMovieData(x[x.category]);
                setTorrentData(x);
                setisOwner(x.uploader === userData.id)
            })
    }, [query, userData]);

    const downloadClickHandler = (e) => {
        TorrentService.increaseDownload(torrentData._id);
    }

    const deleteClickHandler = (e) => {
        TorrentService.delete(torrentData._id);
        history.goBack();
    }

    return (
        <>
            { movieData.category && <section className={style.Torrent} >
                <CommonTitle title={torrentData.title} />
                <Video videoId={movieData.videoId} />
                <MovieInfoWrapper movieData={movieData} />
                <DescriptionField lebel={"Plot"} text={movieData.plot} />
                <ScreenshotsSection picUrls={movieData.picUrls} />
                <Link className={style.DownloadBtn} to={{ pathname: movieData.torrentUrl }} target="_blank">
                    <SubmitBtn onClick={e => downloadClickHandler(e)} value="Download" />
                </Link>
                {
                    isOwner
                    && <SubmitBtn
                        onClick={e => deleteClickHandler(e)}
                        value="Delete Torrent"
                        styles={style.Delete}
                    />
                }
            </section >}
        </>
    );
}

export default Torrent;