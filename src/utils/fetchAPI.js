const fetchAPI = {
    get: (url) => {
        return fetch(url, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json());
    },
    post: (url, data) => {
        return fetch(url, {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json());
    },
    put: (url, data) => {
        return fetch(url, {
            method: "PUT",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json());
    },
    delete: (url) => {
        return fetch(url, {
            method: "DELETE",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },
}

export default fetchAPI;


