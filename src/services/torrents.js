const url = "http://localhost:3001/api/torrents";

const TorrentService = {
    upload: (torrentData) => {
        return fetch(url + "/upload", {
            method: "POST",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(torrentData)
        }).then(res => res.json());
    },
    get: (query) => {
        return fetch(`${url}/list?${query}`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },
    getOne: (query) => {
        return fetch(`${url}/${query}`, {
            method: "GET",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },
    increaseDownload: (torrentId) => {
        return fetch(`${url}/${torrentId}`, {
            method: "PUT",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    },
    delete: (id) => {
        return fetch(`${url}/${id}`, {
            method: "DELETE",
            credentials: "include",
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(res => res.json());
    }
}

export default TorrentService;