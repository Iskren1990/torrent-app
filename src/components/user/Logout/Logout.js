import { useContext } from 'react';
import UserContextStore from '../../../context/UserContextStore';
import TosterContextStore from '../../../context/TosterContextStore';

import style from './Logout.module.css';
import SubmitBtn from '../../common/SubmitBtn';
import UserService from '../../../services/UserSrevice';

const Logout = ({ history }) => {
    const userData = useContext(UserContextStore);
    const { setToastrMsg } = useContext(TosterContextStore);
    const logoutPageHandler = (e) => {
        e.preventDefault()
        UserService.logout()
            .then(res =>history.push('/'))
            .then(userData.logOut)
            .catch(setToastrMsg);
    }

    const returnToPageHandler = (e) => {
        e.preventDefault()
        history.goBack();
    }
    return (
        <section className={style.Wrapper}>
            <article className={style.Container} >
                <h1>Do you really want to Quit</h1>
                <SubmitBtn onClick={e => logoutPageHandler(e)} value="Yes" />
                <SubmitBtn onClick={e => returnToPageHandler(e)} value="No" />
            </article>
        </section>
    );
}

export default Logout;