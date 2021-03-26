const imdbApi = {
    getOne: (movieId) => {
        return fetch(`http://www.omdbapi.com/?apikey=4e53b10e&i=${movieId}`)
        .then(x => x.json())
    }
}

export default imdbApi;