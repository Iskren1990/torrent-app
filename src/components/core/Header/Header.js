import styles from './Header.module.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.logo}>
                <Link to="/"><img src="/logo.png" alt="Torrentee Logo" /><strong>Torrentee</strong></Link>
            </div>
            <div className={styles.nav}>
                <ul className={styles.nav}>
                    <li>
                        <Link to="/home"><strong>Home</strong></Link>
                    </li>
                    <li>
                        <Link to="/user/profile"><strong>Profile</strong></Link>
                    </li>
                    <li>
                        <Link to="/torrents"><strong>Torrents</strong></Link>
                    </li>
                    <li>
                        <Link to="/torrents/upload"><strong>Upload</strong></Link>
                    </li>
                    <li>
                        <Link to="/user/login"><strong>Login</strong></Link>
                    </li>
                    <li>
                        <Link to="/user/logout"><strong>Logout</strong></Link>
                    </li>
                    <li>
                        <Link to="/user/register"><strong>Register</strong></Link>
                    </li>
                </ul>
            </div>
            <div className={styles.profile}>
                <Link to="/profile">
                    <strong>Genadi</strong>
                    <i class="fas fa-user-astronaut"></i>
                </Link>
            </div>
        </header>
    );
}

export default Header;