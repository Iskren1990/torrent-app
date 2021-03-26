function torrentDataModel(data) {
    return {
        "Year": data.year,
        "Released": data.released,
        "Runtime": data.runtime,
        "Genre": data.genre,
        "Director": data.director,
        "Actors": data.actors,
        "Language": data.language,
        "Country": data.country,
        "Imdb Rating": data.imdbRating,
    }
}

export default torrentDataModel;