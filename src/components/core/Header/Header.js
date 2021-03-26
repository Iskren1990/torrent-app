import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import navData from '../../../utils/navigation';

const Header = () => {
    return (
        <header className={styles.Header}>
            <div className={styles.logo}>
                <Link to={navData.home.path}>
                    <img src="/logo.png" alt="Torrentee Logo" />
                    <strong>Torrentee</strong>
                </Link>
            </div>
            <div className={styles.nav}>
                <ul className={styles.nav}>
                    {Object.keys(navData)
                            .map(key => {
                                return (
                                    <li key={navData[key].title}>
                                        <Link to={navData[key].path}>
                                            <strong>{navData[key].title}</strong>
                                        </Link>
                                    </li>
                                )
                            })}
                </ul>
            </div>
            <div className={styles.profile}>
                <Link to={navData.userProfile.path}>
                    <strong>Genadi</strong>
                    <i className="fas fa-user-astronaut"></i>
                </Link>
            </div>
        </header>
    );
}

export default Header;