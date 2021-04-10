import {useContext} from 'react';

import CommonInputFile from '../CommonInputFile';
import cloudinaryAPI from '../../../services/coludinary';
import TosterContextStore from '../../../context/TosterContextStore';

const ScreenshotsUpload = ({ setPicUrls, single, setUploadBtn }) => {
    const { setToastrMsg } = useContext(TosterContextStore);
    const loadFile = (event) => {
        event.persist();
        const urlArr = [];

        [...event.target.files]
            .forEach((pic, i) => {
                setUploadBtn(true);
                cloudinaryAPI.cloudinaryUpload(pic)
                    .then(res => urlArr.push(res.url))
                    .then(ews =>  (i === event.target.files.length - 1 ) && setPicUrls(urlArr))
                    .then(res => setUploadBtn(false))
                    .catch(setToastrMsg);
            });
    };

    return <CommonInputFile single={single} loadFile={e => loadFile(e)}></CommonInputFile>;
}

export default ScreenshotsUpload;

