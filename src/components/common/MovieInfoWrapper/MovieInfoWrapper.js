import CommonImage from '../CommonImage';
import TorrentInformation from '../TorrentInformation';

const MovieInfoWrapper = ({ movieData, style }) => {
    return (
        <section className={style.MovieInfoWrapper}>
            <CommonImage style={style.Img} src={movieData.poster} alt={"Movie Poster"}></CommonImage>
            <TorrentInformation className={style.MovieInfo} style={style.MovieInfo} movieData={movieData} />
        </section>
    );
}

export default MovieInfoWrapper;