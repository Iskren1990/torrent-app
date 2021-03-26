import style from './SocialMedia.module.css';

const SocialMedia = () => {
    return (
        <ul className={style.SocialMedia}>
            <li><a href="https://facebook.com"><i className="fab fa-facebook"></i></a></li>
            <li><a href="https://twiter.com"><i className="fab fa-twitter-square"></i></a></li>
            <li><a href="https://github.com/Iskren1990/torrent-app"><i className="fab fa-github"></i></a></li>
        </ul>
    );
}

export default SocialMedia;