function torrentModel(data) {
    return {
        "year": data.Year,
        "released": data.Released,
        "runtime": data.Runtime,
        "genre": data.Genre,
        "director": data.Director,
        "actors": data.Actors,
        "language": data.Language,
        "country": data.Country,
        "imdbRating": data.imdbRating,
        "imdbID": data.imdbID,
        "plot": data.Plot,
        "poster": data.Poster
    }
}

export default torrentModel;