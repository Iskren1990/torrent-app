import { useCallback, useEffect, useState, useContext } from 'react';
import UserService from '../services/UserSrevice';
import UserContextStore from './UserContextStore';
import TosterContextStore from './TosterContextStore';

import LoadingBar from '../components/common/LoadingBar';

const UserContext = (props) => {
    const { setToastrMsg } = useContext(TosterContextStore);
    const [user, setUser] = useState({ isLogged: false });
    const [loading, setLoading] = useState(true);

    const updateUserInfo = useCallback(() => {
        return UserService.profile()
        // .then(console.log)
            .then(userData => logIn(userData))
            .catch(err => { setToastrMsg(err); setLoading(false) })
    }, []);

    useEffect(() => {
        updateUserInfo();
    }, [updateUserInfo]);

    const logIn = (user) => {
        setUser({ isLogged: true, ...user });
        setLoading(false)
    }

    const logOut = () => {
        setUser({ isLogged: false });
        setLoading(false)
    }

    if (loading) {
        return <LoadingBar />
    }

    return (
        <UserContextStore.Provider value={{
            ...user,
            logIn,
            logOut,
            updateUserInfo,
            loading
        }}>
            {props.children}
        </UserContextStore.Provider>
    );
}

export default UserContext;