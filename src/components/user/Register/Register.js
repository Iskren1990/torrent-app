import style from './Register.module.css';
import CommonInput from '../../common/CommonInput';
import SubmitBtn from '../../common/SubmitBtn';
import { useState, useContext } from 'react';
import UserService from '../UserSrevice';
import UserContextStore from '../../../UserContextStore';

const Register = ({history}) => {
    const userData = useContext(UserContextStore);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const registerSubmitHandler = (e) => {
        e.preventDefault();
        UserService
        .register({username, password, email, age})
        .then(res => userData.logIn(res))
        .then(history.push("/"))
        .catch(console.log);
        console.log(userData);
    }

    return (
        <form className={style.RegisterForm} onSubmit={registerSubmitHandler}>
            <h1>Register</h1>
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
            <CommonInput
                type={"email"}
                value={email}
                id={"email"}
                label={"Email:"}
                onChange={(e) => setEmail(e.target.value)}
            />
            <CommonInput
                type={"number"}
                value={age}
                id={"age"}
                label={"Age:"}
                onChange={(e) => setAge(e.target.value)}
            />
            <SubmitBtn value={"Register"} />
        </form>
    );
}

export default Register;