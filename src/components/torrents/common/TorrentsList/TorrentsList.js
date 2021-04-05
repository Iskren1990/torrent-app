import style from './TorrentsList.module.css';
import TorrentsListItem from '../TorrentsListItem';
import CommonTitle from '../../../common/CommonTitle'

const TorrentsList = ({ torrentsArr, heading }) => {
    return (
        <section className={style.TorrentList}>
            <CommonTitle title={heading} />
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
                            <TorrentsListItem
                                key={torrentItem._id}
                                torrentItem={torrentItem}
                            />
                        )
                    }
                </tbody>
            </table>
        </section>
    );
}

export default TorrentsList;