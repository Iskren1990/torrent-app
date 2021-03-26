import Home from "../components/core/Home";
import UploadTorrent from "../components/torrents/UploadTorrent/UploadTorrent";

const navData = {
    home: {
        path: "/home",
        title: "Home",
        component: Home
    },
    userProfile: {
        path: "/user/profile",
        title: "Profile",
        component: Home
        //todo
    },
    torrents: {
        path: "/torrents",
        title: "Torrents",
        component: Home
    },
    uploadTorrent: {
        path: "/torrents/upload",
        title: "Upload",
        component: UploadTorrent
        //todo
    },
    userLogin: {
        path: "/user/login",
        title: "Login",
        component: Home
        //todo
    },
    userLogout: {
        path: "/user/logout",
        title: "Logout",
        component: Home
        //todo
    },
    userRegister: {
        path: "/user/register",
        title: "Register",
        component: Home
        //todo
    }
}

export default navData;