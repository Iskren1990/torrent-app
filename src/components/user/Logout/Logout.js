import style from './Logout.module.css';
import SubmitBtn from '../../common/SubmitBtn';
import UserService from '../UserSrevice';

const Logout = ({ history }) => {
    const logoutPageHandler = (e) => {
        e.preventDefault()
        UserService.logout()
        .then(res => 
            res.status == "200"
            ? history.push('/')
            : history.push('/') // toaster message
        )
        .catch(history.push('/'));
    }
    const returnToPageHandler = (e) => {
        e.preventDefault()
        console.log(history);
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