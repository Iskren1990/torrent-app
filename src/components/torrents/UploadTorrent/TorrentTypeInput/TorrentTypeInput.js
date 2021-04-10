import style from './TorrentTypeInput.module.css';

const TorrentTypeInput = () => {
    return (
        <div className={style.row}>

            <label className={style.label} htmlFor="category">Choose category</label>
            <select className={style.TorrentTypeInput} id="category" name="category">
                <option value="movies">Movies</option>
                <option value="serial">Serials</option>
                {/* <option value="music">Music</option>
                <option value="game">Games</option>
                <option value="book">Books</option> */}
            </select>

        </div>
    )
}

export default TorrentTypeInput;