import styles from './Header.module.css';
import { Link } from 'react-router-dom';
import NavData from '../../../utils/navigation';
import { useContext } from 'react';
import UserContextStore from '../../../UserContextStore';
import CommonImage from '../../common/CommonImage';

const Header = () => {
    const userData = useContext(UserContextStore);
    const navData = NavData(userData);

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
                <Link to={navData.userProfile?.path || "/"}>
                    <strong>{userData.username || ""}</strong>
                    {
                        userData?.avatar
                            ? <CommonImage
                                src={userData.avatar}
                                alt="Profile Pic"
                                style={styles.Avatar}
                            />
                            : <i className="fas fa-user-astronaut"></i>
                    }
                </Link>
            </div>
        </header>
    );
}

export default Header;