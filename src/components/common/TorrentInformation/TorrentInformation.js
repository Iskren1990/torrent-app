import TorrentInfoField from '../TorrentInfoField';
import torrentDataModel from '../../torrents/utils/torrentDataModel';

const TorrentInformation = ({ movieData, style }) => {
    movieData = torrentDataModel(movieData);
    return (
        <table className={style}>
            <tbody>
                {Object.keys(movieData).map(prop =>
                    movieData[prop]
                    && (movieData[prop] !== "N/A")
                    && <TorrentInfoField key={prop} fieldDesc={prop} fieldData={movieData[prop]} />
                )}
            </tbody>
        </table>
    );
}

export default TorrentInformation;