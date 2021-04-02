import { Fragment, useState } from 'react';
import cloudinaryAPI from '../../../../services/coludinary';

import style from './TorrentFile.module.css';
import ErrorMessage from '../../../common/ErrorMessage';
import { error } from '../../../../utils/messages';

const TorrentFile = ({ setFile, setUploadBtn }) => {

    const [isValid, setIsValid] = useState(true);

    const size = (e) => {
        if (e.target.files[0].size > 1e6) {
            e.target.value = "";
            setIsValid(false);
        }
        setIsValid(true);
        const form = new FormData()
        form.append("file", e.target.files[0], e.target.files[0].name);
        form.append("upload_preset", "ml_default");
                cloudinaryAPI.cloudinaryUpload(form)
                    .then(res => res.json())
                    .then(res => { setFile(res.url); return res})
                    .then(res => setUploadBtn(false))
                    .catch(console.log)
    }
    return (
        <Fragment>
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
            { isValid || <ErrorMessage error={error.fileSize} />}
        </Fragment>
    );
}

export default TorrentFile;