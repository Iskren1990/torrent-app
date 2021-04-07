import { useContext } from 'react';

import style from './Logout.module.css';
import SubmitBtn from '../../common/SubmitBtn';
import UserService from '../../../services/UserSrevice';
import UserContextStore from '../../../UserContextStore';

const Logout = ({ history }) => {
    const userData = useContext(UserContextStore);

    const logoutPageHandler = (e) => {
        e.preventDefault()
        UserService.logout()
            .then(res =>
                res.message === "Logged out successfully"
                    ? history.push('/')
                    : history.push('/') // toaster message
            )
            .then(userData.logOut)
            .catch(history.push('/'));
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