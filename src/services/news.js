const baseUrl =
 "https://newsapi.org/v2/top-headlines?country=bg&language=bg&apiKey=ee653f8c12b3495b8433b302abb790fd"

const newsApi = {
    news: () => {
        return fetch(baseUrl)
            .then(x => x.json()) 
    }

}


export default newsApi;