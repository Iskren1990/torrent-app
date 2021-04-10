const fetchAPI = {
    get: (url) => {
        return fetch(url, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => checkErr(res));
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
            .then(res => res.json())
            .then(res => checkErr(res));
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
            .then(res => res.json())
            .then(res => checkErr(res));
    },
    delete: (url) => {
        return fetch(url, {
            method: "DELETE",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(res => checkErr(res));
    },
}

export default fetchAPI;


function checkErr(res) {
    if (res.err) {
        throw res.message;
    }
    return res;
}