const url = "http://localhost:3001/api/user";

const UserService = {
    register: (userData) => {
        return fetch(`${url}/register`, {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json());
    },
    login: (userData) => {
        return fetch(`${url}/login`, {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json());
    },
    profile: () => {
        return fetch(`${url}/profile`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json());
    },
    editProfile: (userData) => {
        return fetch(`${url}/profile/edit`, {
            method: "PUT",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(userData)
        })
            .then(res => res.json());
    },
    logout: () => {
        return fetch(`${url}/logout`, {credentials: "include"})
            .then(res => res.json());
    }
}

export default UserService;