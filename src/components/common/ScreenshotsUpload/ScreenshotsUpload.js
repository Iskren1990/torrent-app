import CommonInputFile from '../CommonInputFile';
import cloudinaryAPI from '../../../services/coludinary';

const ScreenshotsUpload = ({ setPicUrls, single, setUploadBtn }) => {

    const loadFile = (event) => {
        const urlArr = [];

        [...event.target.files]
            .forEach((pic, i) => {
                setUploadBtn(true)
                const form = new FormData();
                form.append("file", pic, pic.name);
                form.append("upload_preset", "ml_default");
                cloudinaryAPI.cloudinaryUpload(form)
                    .then(res => res.json())
                    .then(res => urlArr.push(res.url))
                    .then(ews => {if(i === event.target.files.length - 1 ) setPicUrls(urlArr)})
                    .then(res => setUploadBtn(false))
                    .catch(console.log)
            });
    };

    return <CommonInputFile single={single} loadFile={e => loadFile(e)}></CommonInputFile>;
}

export default ScreenshotsUpload;

