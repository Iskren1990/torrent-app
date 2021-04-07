import { newsApiUrl, newsApiKey } from '../config/environment';

const newsApi = {
    news: () =>
        fetch(`${newsApiUrl}/top-headlines?country=bg&language=bg&apiKey=${newsApiKey}`)
            .then(x => x.json()),
}

export default newsApi;