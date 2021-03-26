import style from './TorrentInfoField.module.css';

const TorrentInfoField = ({fieldDesc, fieldData}) => {
    return (
        <tr className={style.TorrentInfoField}>
            <td><h4>{fieldDesc}: </h4></td>
            <td><em>{fieldData}</em></td>
        </tr>
    );
}

export default TorrentInfoField;