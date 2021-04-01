import CommonInputFile from '../CommonInputFile';

const ScreenshotsUpload = ({ setPicsForUpload, setPicUrls}) => {

    const loadFile = (event) => {
        const pics = new FormData();
        const urls = [...event.target.files]
            .map((_, i) => URL.createObjectURL(event.target.files[i]));
        setPicUrls(urls);
        [...event.target.files]
            .map(pic => pics.append("file", pic, pic.name));
        setPicsForUpload(pics);
    };

    return <CommonInputFile loadFile={e => loadFile(e)}></CommonInputFile> ;
}

export default ScreenshotsUpload;