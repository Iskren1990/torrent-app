import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';
import NavData from '../../../utils/navigation';
import UserContextStore from '../../../context/UserContextStore';
import CommonImage from '../../common/CommonImage';
import SubmitBtn from '../../common/SubmitBtn';

const Header = () => {
    const userData = useContext(UserContextStore);
    const navData = NavData(userData);
    const [burger, setBurger] = useState(false);
    const toggle = (e) => setBurger(burger => !burger);
    return (
        <header className={styles.Header}>
            <div className={styles.logo}>
                <Link to={navData.home.path}>
                    <img src="/logo.png" alt="Torrentee Logo" />
                    <strong>Torrentee</strong>
                </Link>
            </div>
            <div>
            <SubmitBtn onClick={e => toggle()} styles={styles.Toggle} value={"Menu"}></SubmitBtn>
                <ul className={burger ? styles.Hide : styles.nav }>
                    {Object.keys(navData)
                        .map(key => {
                            return (
                                <li key={navData[key].path}>
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