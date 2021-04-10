import style from './TorrentName.module.css';

const TorrentName = ({ placeholder }) => {
    return (
        <div className={style.row}>
            <label
                htmlFor="torrentName"
            >
                Torrent Name
                </label>
            <input
                className={style.torrentName}
                type="text"
                name="torrentName"
                id="name"
                placeholder={placeholder || ""}
            />
        </div>
    );
}

export default TorrentName;