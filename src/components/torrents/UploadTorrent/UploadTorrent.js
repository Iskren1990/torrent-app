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
import ScreenshotsSection from '../../common/ScreenshotsSection'

const UploadTorrent = (props) => {

    const [movieId, setMovieId] = useState('');
    const [movieData, setMovieData] = useState({});
    const [torrentFile, setTorrentFile] = useState({});
    const [screenshotsFile, setScreenshotsFile] = useState({});
    const [picUrls, setPicUrls] = useState([]);

    useEffect(() => {
        if (!!movieId === false) return null;
        imdbApi.getOne(movieId)
            .then(x => setMovieData(torrentModel(x)))
            .catch(x => console.log("BE error popup here", x));
    }, [movieId]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const torrentData = {
            ...movieData,
            title: e.target.torrentName.value,
            category: e.target.category.value,
            description: e.target.description.value,
            torrentFile,
            screenshotsFile,
        }

        const fieldValidation = Object.keys(torrentData).some(x => torrentData[x] === "");
        if (!fieldValidation || !torrentData.torrentFile instanceof FormData) {
            console.log("Send data")
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
            { movieData.imdbID && <MovieInfoWrapper
                style={{
                    MovieInfo: style.MovieInfo,
                    MovieInfoWrapper: style.MovieInfoWrapper,
                    Img: style.Image
                }}
                movieData={movieData}
            />}
            <DescriptionField lebel={"Plot"} text={movieData.plot} readonly={true} />
            <TorrentFile setFile={setTorrentFile} />
            <ScreenshotsUpload setPicsForUpload={setScreenshotsFile} setPicUrls={setPicUrls} />
            <ScreenshotsSection picUrls={picUrls} />
            <SubmitBtn value={"Upload"} />
        </form>
    );
}

export default UploadTorrent;