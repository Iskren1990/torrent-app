import styles from './Footer.module.css';
import { Link } from 'react-router-dom';
import SocialMedia from '../../common/SocialMedia';

const Footer = () => {
    return (
        <footer className={styles.Footer}>
            <ul className={styles.FooterNav}>
                <li>
                    <Link to='/'>About US</Link>
                </li>
                <li>
                    <Link to='/'>FAQ</Link>
                </li>
                <li>
                    <a href='https://dodo-hosting.herokuapp.com'>Partners</a>
                </li>
                <li>
                    <Link to='/'>Terms & Conditions</Link>
                </li>
            </ul>
            <SocialMedia></SocialMedia>
        </footer>
    )
}

export default Footer;