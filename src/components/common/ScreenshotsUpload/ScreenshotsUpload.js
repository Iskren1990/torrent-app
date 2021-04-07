import CommonInputFile from '../CommonInputFile';
import cloudinaryAPI from '../../../services/coludinary';

const ScreenshotsUpload = ({ setPicUrls, single, setUploadBtn }) => {

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
                    .catch(console.log);
            });
    };

    return <CommonInputFile single={single} loadFile={e => loadFile(e)}></CommonInputFile>;
}

export default ScreenshotsUpload;

