import { useState, useContext } from 'react';
import fieldValidator from '../../../utils/fieldValidation';
import UserContextStore from '../../../UserContextStore';
import TosterContextStore from '../../../TosterContextStore';

import style from './Login.module.css';
import CommonInput from '../../common/CommonInput';
import SubmitBtn from '../../common/SubmitBtn';
import UserService from '../../../services/UserSrevice';

const Login = ({ history }) => {
    const { setToastrMsg } = useContext(TosterContextStore);
    const userData = useContext(UserContextStore);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginSubmitHandler = (e) => {
        e.preventDefault();

        const [err, errCont] = fieldValidator({ username, password });
        if (err) return setToastrMsg(errCont);

        UserService.login({ username, password })
            .then(res => {
                if (res.message) throw new Error(res.message);
                history.push('/')
                userData.logIn(res)
            })
            .catch(x => setToastrMsg(x.message));
    }

    return (
        <form className={style.LoginForm} onSubmit={loginSubmitHandler}>
            <h1>Login</h1>
            <CommonInput
                value={username}
                id={"username"}
                label={"Username:"}
                onChange={(e) => setUsername(e.target.value)}
            />
            <CommonInput
                type={"password"}
                value={password}
                id={"password"}
                label={"Password:"}
                onChange={(e) => setPassword(e.target.value)}
            />
            <SubmitBtn value={"Login"} />
        </form>
    );
}

export default Login;