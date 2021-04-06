import Home from "../components/core/Home";
import UploadTorrent from "../components/torrents/UploadTorrent/UploadTorrent";
import Register from '../components/user/Register';
import Login from '../components/user/Login';
import Profile from '../components/user/Profile';
import Logout from '../components/user/Logout';
import Torrents from '../components/torrents/Torrents';
import Torrent from '../components/torrents/Torrent';

const NavData = (userData) => {

    const common = {
        home: {
            path: "/home",
            title: "Home",
            component: Home
        },
    }

    const userState = {
        unlogged: {
            userLogin: {
                path: "/user/login",
                title: "Login",
                component: Login
            },
            userRegister: {
                path: "/user/register",
                title: "Register",
                component: Register
            },
        },
        logged: {
            userProfile: {
                path: "/user/profile",
                title: "Profile",
                component: Profile
            },
            torrents: {
                path: "/torrents/list",
                title: "Torrents",
                component: Torrents
            },
            uploadTorrent: {
                path: "/torrents/upload",
                title: "Upload",
                component: UploadTorrent
            },
            userLogout: {
                path: "/user/logout",
                title: "Logout",
                component: Logout
            },
            torrent: {
                path: "/torrents/:id",
                component: Torrent
            }
        }
    }
    return { ...common, ...userState[userData.isLogged ? "logged" : "unlogged" ]}
}

export default NavData;