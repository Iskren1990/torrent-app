import { serverUrl } from '../config/environment';

const newsApi = {
    news: () =>
        fetch(`${serverUrl}/api/news`)
            .then(x => x.json()),
}

export default newsApi;