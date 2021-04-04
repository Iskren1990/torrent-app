import style from './TorrentsList.module.css';
import TorrentsListItem from '../TorrentsListItem';

const TorrentsList = ({ torrentsArr, heading }) => {
    return (
        <section className={style.TorrentList}>
            <h1>{heading}</h1>
            <table>
                <thead>
                    <tr>
                        <td>Type</td>
                        <td>Name</td>
                        <td>Rating</td>
                        <td>Upload Time</td>
                        <td>Downloads</td>
                    </tr>
                </thead>
                <tbody>
                    {
                        torrentsArr.map((torrentItem) =>
                            <TorrentsListItem key={torrentItem._id} torrentItem={torrentItem} />
                        )
                    }
                </tbody>
            </table>
        </section>
    );
}

export default TorrentsList;