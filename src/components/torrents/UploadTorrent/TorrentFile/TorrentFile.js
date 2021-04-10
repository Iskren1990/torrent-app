import { useState, useContext} from 'react';
import cloudinaryAPI from '../../../../services/coludinary';
import TosterContextStore from '../../../../context/TosterContextStore';

import style from './TorrentFile.module.css';
import ErrorMessage from '../../../common/ErrorMessage';

const TorrentFile = ({ setFile, setUploadBtn }) => {
    const { setToastrMsg } = useContext(TosterContextStore);
    const [isValid, setIsValid] = useState(true);

    const size = (e) => {
        if (e.target.files[0].size > 1e6) {
            e.target.value = "";
            setIsValid(false);
        }
        setIsValid(true);
        cloudinaryAPI.cloudinaryUpload(e.target.files[0])
            .then(res => { setFile(res.url); setUploadBtn(false) })
            .catch(setToastrMsg);
    }
    return (
        <>
            <div className={style.row}>
                <label htmlFor="torrentFile" >Attach Torrent</label>
                <div className={style.Label}>
                    <input
                        onChange={(e) => size(e)}
                        className={style.TorrentFile}
                        type="file"
                        name="file"
                        id="torrentFile"
                        accept=".torrent"
                    />
                </div>
            </div>
            { isValid || <ErrorMessage error={"File must be less than 1MB"} />}
        </>
    );
}

export default TorrentFile;