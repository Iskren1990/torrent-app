import { useEffect, useState } from 'react';
import UserService from './components/user/UserSrevice';
import UserContextStore from './UserContextStore';
import LoadingBar from './components/common/LoadingBar';

const UserContext = (props) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        UserService.profile()
            .then(userData => 
                !userData.err 
                ? logIn(userData) 
                : setLoading(false))
    }, []);


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
            loading
        }}>
            {props.children}
        </UserContextStore.Provider>
    );
}

export default UserContext;