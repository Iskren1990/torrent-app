import { useState, useEffect } from 'react';

import imdbApi from '../services/imdbApi';
import torrentModel from '../utils/torentModel';

import style from './UploadTorrent.module.css';
import TorrentTypeInput from './TorrentTypeInput';
import TorrentName from './TorrentName';
import TorrentImdbLink from './TorrentImdbLink';
import MovieInfoWrapper from '../../common/MovieInfoWrapper';
import TorrentFile from './TorrentFile';
import ScreenshotsUpload from '../../common/ScreenshotsUpload';
import SubmitBtn from '../../common/SubmitBtn';
import DescriptionField from '../../common/DescriptionField';
import ScreenshotsSection from '../../common/ScreenshotsSection';
import TorrentService from '../../../services/torrents';

const UploadTorrent = (props) => {

    const [movieId, setMovieId] = useState('');
    const [movieData, setMovieData] = useState({});
    const [torrentUrl, setTorrentUrl] = useState("");
    const [picUrls, setPicUrls] = useState([]);


    useEffect(() => {
        if (!!movieId === false) return null;
        imdbApi.getOne(movieId)
            .then(x => setMovieData(torrentModel(x)))
            .catch(x => console.log("BE error popup here", x));
    }, [movieId]);

    const multiplePicUrl = url => { setPicUrls(url); console.log("url", url) };

    const handleSubmit = (e) => {
        e.preventDefault();

        const torrentData = {
            ...movieData,
            title: e.target.torrentName.value,
            category: e.target.category.value,
            description: e.target.description.value,
            torrentUrl,
            picUrls
        }
        const emptyFieldValidation = Object.keys(torrentData).some(x => torrentData[x] === "");
        if (!emptyFieldValidation) {
            TorrentService.upload(torrentData).then(console.log).catch(console.log)
        } else {
            console.log("Field $ {name} is required");
        }
    }

    return (
        <form className={style.UploadTorrent} onSubmit={handleSubmit} >
            <h3 className={style.title}>Upload Torrent</h3>
            <TorrentName />
            <TorrentTypeInput {...movieData} />
            <TorrentImdbLink setMovieId={setMovieId} />
            {
                movieData.imdbID && <MovieInfoWrapper movieData={movieData} />
            }
            <DescriptionField lebel={"Plot"} text={movieData.plot} readonly={true} />
            <TorrentFile setFile={setTorrentUrl} setUploadBtn={e => { }} />
            {/* Block upload Btn untill files upload  setUploadBtn() */}
            <ScreenshotsUpload setPicUrls={multiplePicUrl} setUploadBtn={() => { }} />
            <ScreenshotsSection picUrls={picUrls} />
            <SubmitBtn value={"Upload"} setUploadBtn={() => { }} />
        </form>
    );
}

export default UploadTorrent;