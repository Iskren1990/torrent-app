import { Fragment, useState } from 'react';

import style from './TorrentFile.module.css';
import ErrorMessage from '../../../common/ErrorMessage';
import { error } from '../../../../utils/messages';

const TorrentFile = ({ setFile }) => {

    const [isValid, setIsValid] = useState(true);

    const size = (e) => {
        if (e.target.files[0].size > 1e6) {
            e.target.value = "";
            setIsValid(false);
            return;
        }
        setIsValid(true);
        const apended = new FormData()
        apended.append("torrent", e.target.files[0], e.target.files[0].name);
        setFile(apended);
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