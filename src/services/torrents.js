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
    }
}

export default TorrentService;