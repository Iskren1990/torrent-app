import { useCallback, useEffect, useState } from 'react';
import UserService from './components/user/UserSrevice';
import UserContextStore from './UserContextStore';
import LoadingBar from './components/common/LoadingBar';

const UserContext = (props) => {

    const [user, setUser] = useState({ isLogged: false });
    const [loading, setLoading] = useState(true);

    const updateUserInfo = useCallback(() => {
        UserService.profile()
            .then(userData =>
                !userData.err
                    ? logIn(userData)
                    : setLoading(false)
            ).catch(console.log)
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