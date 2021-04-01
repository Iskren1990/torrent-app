import style from './CommonInputFile.module.css';

const CommonInputFile = ({single, loadFile}) => {
    return (
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
    );
}

export default CommonInputFile;