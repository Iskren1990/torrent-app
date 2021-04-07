import {omdbApiUrl, omdbApiKey} from '../config/environment';

const imdbApi = {
    getOne: (movieId) => fetch(`${omdbApiUrl}/?apikey=${omdbApiKey}=${movieId}`).then(x => x.json()),
}

export default imdbApi;