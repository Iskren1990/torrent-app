const url = "http://localhost:3001/api/user";

const UserService = {
    register: (userData) => {
        return fetch(`${url}/register`, {
            method: "POST",
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
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(userData) 
        })
            .then(res => res.json());
    },
    logout: () => {
        return fetch(`${url}/logout`)
            .then(res => res.json());
    }
}

export default UserService;