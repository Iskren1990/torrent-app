import {serverUrl} from '../config/environment';
import fetchAPI from '../utils/fetchAPI';

const TorrentService = {
    upload: (torrentData) => fetchAPI.post(`${serverUrl}/api/torrents/upload`, torrentData),
    get: (query) => fetchAPI.get(`${serverUrl}/api/torrents/list?${query}`),
    getOne: (query) => fetchAPI.get(`${serverUrl}/api/torrents/${query}`),
    increaseDownload: (torrentId) => fetchAPI.put(`${serverUrl}/api/torrents/${torrentId}`, "1"),
    delete: (id) => fetchAPI.delete(`${serverUrl}/api/torrents/${id}`),
}

export default TorrentService;