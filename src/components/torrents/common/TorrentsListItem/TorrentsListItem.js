import { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './TorrentsListItem.module.css';
import CommonImage from '../../../common/CommonImage';

const TorrentsListItem = ({ torrentItem }) => {

    const [isHovered, setIsHovered] = useState(false);
    const { title, imdbRating, createdTime, downloads } = torrentItem;

    return (
        <>
            { isHovered && <CommonImage
                src={torrentItem.poster}
                style={style.Img}
                alt={`${torrentItem.title} poster`}
                fallback={e => console.log("Immage Not available")}
            />}
            <tr
                className={style.Item}
                onMouseEnter={e => setIsHovered(true)}
                onMouseLeave={e => setIsHovered(false)}
            >
                <td >
                    <Link
                        className={style[torrentItem.category]}
                        to={`/torrents/${torrentItem._id}`}
                    />
                </td>
                {
                    [title, imdbRating, createdTime, downloads].map(item =>
                        <td key={item}>
                            <Link to={`/torrents/${torrentItem._id}`} >
                                {item}
                            </Link>
                        </td>
                    )
                }
            </tr>
        </>
    );
}
export default TorrentsListItem;