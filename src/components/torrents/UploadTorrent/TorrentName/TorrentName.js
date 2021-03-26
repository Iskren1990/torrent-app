import style from './TorrentName.module.css';

const TorrentName = () => {
    return (
        <div className={style.row}>
            <label htmlFor="torrentName">Torrent Name</label>
            <input className={style.torrentName} type="text" name="torrentName" id="name"/>
        </div>
    );
}

export default TorrentName;