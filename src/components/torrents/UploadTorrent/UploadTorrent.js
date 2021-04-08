import { useState, useEffect, useContext } from 'react';

import imdbApi from '../../../services/imdbApi';
import torrentModel from '../utils/torentModel';
import TosterContextStore from '../../../context/TosterContextStore';
import fieldValidator from '../../../utils/fieldValidation';

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
import CommonTitle from '../../common/CommonTitle';

const UploadTorrent = (props) => {

    const [movieId, setMovieId] = useState('');
    const [movieData, setMovieData] = useState({});
    const [torrentUrl, setTorrentUrl] = useState("");
    const [picUrls, setPicUrls] = useState([]);
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const { setToastrMsg } = useContext(TosterContextStore);

    useEffect(() => {
        imdbApi.getOne(movieId)
            .then(x => setMovieData(torrentModel(x)))
            .catch(x => console.log("BE error popup here", x));
    }, [movieId]);

    const multiplePicUrl = url => setPicUrls(url);

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
        
        const [err, errCont] = fieldValidator(torrentData);
        if (err) return setToastrMsg(errCont);

        TorrentService.upload(torrentData)
            .then(res => props.history.push(`/torrents/${res._id}?category=${res.category}`))
            .catch(console.log);
    }

    return (
        <form className={style.UploadTorrent} onSubmit={handleSubmit} >
            <CommonTitle styles={style.title} title={"Upload Torrent"} />
            <TorrentName />
            <TorrentTypeInput {...movieData} />
            <TorrentImdbLink setMovieId={setMovieId} />
            { movieData.imdbID
                && <MovieInfoWrapper movieData={movieData} />}
            <DescriptionField lebel={"Plot"} text={movieData.plot} readonly={true} />
            <TorrentFile setFile={setTorrentUrl} setUploadBtn={e => setIsSubmitDisabled()} />
            <ScreenshotsUpload setPicUrls={multiplePicUrl} setUploadBtn={e => setIsSubmitDisabled} />
            <ScreenshotsSection picUrls={picUrls} />
            <SubmitBtn value={"Upload"} disabled={isSubmitDisabled} />
        </form>
    );
}

export default UploadTorrent;