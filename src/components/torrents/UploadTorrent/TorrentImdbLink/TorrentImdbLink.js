import { useState } from 'react';

import style from './TorrentImdbLink.module.css';
import ErrorMessage from '../../../common/ErrorMessage';

const TorrentImdbLink = ({ setMovieId, placeholder }) => {

    const [validUrl, setValidUrl] = useState(true);

    const IMDBUrlValidator = (e) => {
        const isValid = /tt\d{7,8}/.test(e.target.value);
        setValidUrl(isValid);
        if (isValid) {
            const id = e.target.value.match(/tt\d{7,8}/gi)[0];
            setMovieId(id);
        }
    }

    return (
        <>
            <div className={style.row}>
                <label htmlFor="imdbLink">Add IMDB movie link</label>
                <input
                    className={style.imdbLink}
                    type="url"
                    name="imdbLink"
                    id="imdbLink"
                    onBlur={IMDBUrlValidator}
                    placeholder={placeholder || ""}
                />
            </div>
            {
                validUrl
                || <ErrorMessage error={"Wrong IMDB link, it must include tt followed by 7 digits"} />
            }
        </>
    );
}

export default TorrentImdbLink;