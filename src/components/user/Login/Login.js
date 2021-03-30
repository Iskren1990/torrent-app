import style from './Login.module.css';
import CommonInput from '../../common/CommonInput';
import SubmitBtn from '../../common/SubmitBtn';
import { useState } from 'react';
import UserService from '../UserSrevice';

const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const loginSubmitHandler = (e) => {
        e.preventDefault();
        UserService.login({username, password});
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