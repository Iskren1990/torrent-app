import CommonInputFile from '../CommonInputFile';
import cloudinaryAPI from '../../../services/coludinary';

const ScreenshotsUpload = ({ setPicUrls, single }) => {

    const loadFile = (event) => {

        const urls = [...event.target.files]
            .map((_, i) => URL.createObjectURL(event.target.files[i]));
        setPicUrls(urls);
        [...event.target.files]
            .forEach((pic) => {
                const form = new FormData();
                form.append("file", pic, pic.name);
                form.append("upload_preset", "ml_default");
                cloudinaryAPI.cloudinaryUpload(form)
                    .then(res => res.json())
                    .then(res => { setPicUrls(res.url) })
                    .catch(console.log)
            });
    };

    return <CommonInputFile single={single} loadFile={e => loadFile(e)}></CommonInputFile>;
}

export default ScreenshotsUpload;

