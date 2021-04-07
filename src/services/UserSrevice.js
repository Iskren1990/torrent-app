import {serverUrl} from '../config/environment';
import fetchAPI from '../utils/fetchAPI';

const UserService = {
    register: (userData) => fetchAPI.post(`${serverUrl}/api/user/register` , userData),
    login: (userData) => fetchAPI.post(`${serverUrl}/api/user/login` , userData),
    profile: () => fetchAPI.get(`${serverUrl}/api/user/profile`),
    editProfile: (userData) => fetchAPI.put(`${serverUrl}/api/user/profile/edit`, userData),
    logout: () => fetchAPI.get(`${serverUrl}/api/user/logout`),
}

export default UserService;