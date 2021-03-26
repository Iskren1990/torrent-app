import { Fragment, useState } from 'react';
import style from './TorrentImdbLink.module.css';
import { error } from '../../../../utils/messages';
import ErrorMessage from '../../../common/ErrorMessage';

const TorrentImdbLink = ({ setMovieId }) => {

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
        <Fragment>
            <div className={style.row}>
                <label htmlFor="imdbLink">Add IMDB movie link</label>
                <input
                    className={style.imdbLink}
                    type="url"
                    name="imdbLink"
                    id="imdbLink"
                    onBlur={IMDBUrlValidator}
                />
            </div>
            { validUrl ? '' : <ErrorMessage error={error.IMDBUrl} /> }
        </Fragment>
    );
}

export default TorrentImdbLink;