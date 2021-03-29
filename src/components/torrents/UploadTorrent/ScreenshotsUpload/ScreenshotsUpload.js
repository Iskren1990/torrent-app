import { Fragment, useState } from 'react';

import style from './ScreenshotsUpload.module.css';
import ScreenshotsSection from '../../common/ScreenshotsSection';


const ScreenshotsUpload = ({ setPics, single }) => {

    const [picUrls, setPicUrls] = useState([]);

    const loadFile = (event) => {
        const pics = new FormData();
        const urls = [...event.target.files]
            .map((_, i) => URL.createObjectURL(event.target.files[i]));
        setPicUrls(urls);
        [...event.target.files]
            .map(pic => pics.append("file", pic, pic.name));
        // setPics(pics);
    };

    return (
        <Fragment>
            <div className={style.row}>
                <label htmlFor="torrentFile" >Attach Screenshot</label>
                <div className={style.Label}>
                    <input
                        onChange={(e) => loadFile(e)}
                        className={style.TorrentFile}
                        type="file"
                        accept="image/*"
                        name="file"
                        id="torrentFile"
                        {...(single !== false && {multiple: "multiple"})}
                    />
                </div>
            </div>

            <ScreenshotsSection picUrls={picUrls}></ScreenshotsSection>

        </Fragment>
    );
}

export default ScreenshotsUpload;