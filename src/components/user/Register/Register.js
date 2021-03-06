import { useState, useContext } from 'react';
import fieldValidator from '../../../utils/fieldValidation';

import style from './Register.module.css';
import CommonInput from '../../common/CommonInput';
import SubmitBtn from '../../common/SubmitBtn';
import UserService from '../../../services/UserSrevice';
import UserContextStore from '../../../context/UserContextStore';
import TosterContextStore from '../../../context/TosterContextStore';

const Register = ({ history }) => {
    const userData = useContext(UserContextStore);
    const { setToastrMsg } = useContext(TosterContextStore);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [rePassword, setRePassword] = useState("");
    const [areEqual, setAreEqual] = useState(false);
    const [email, setEmail] = useState("");
    const [age, setAge] = useState("");

    const registerSubmitHandler = (e) => {
        e.preventDefault();

        let [err, errCont] = fieldValidator({ username, password, email, age });

        if (areEqual === false) {
            errCont.push("Passwords do not match");
            err = true;
        };
        if (err) return setToastrMsg(errCont);

        UserService
            .register({ username, password, email, age })
            .then(res => {
                if (res.err) throw new Error(res.message);
                history.push('/')
                userData.logIn(res)
            })
            .catch(x => setToastrMsg(x.message));
    }

    const passwordEqualityHandler = (val) => {
        setRePassword(val);
        val !== password ? setAreEqual(false) : setAreEqual(true);
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
                type={"password"}
                value={rePassword}
                id={"rePassword"}
                label={"Repeat Password:"}
                onChange={(e) => passwordEqualityHandler(e.target.value)}
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