import { useEffect, useState } from 'react';
import newsApi from '../../../services/news';

import style from './NewsSection.module.css';
import NewsItem from '../../common/NewsItem';

const NewsSection = () => {
    const [news, setNews] = useState([]);
    
    useEffect(() => {
        newsApi.news()
        .then(x => setNews(x.articles))
    },[setNews]);

    return (
        <section className={style.NewsSection}>
            { news &&
            news.slice(0, 6).map(article =>
                <a key={article.url} className={style.Links} href={article.url}>
                    <NewsItem
                        {...article}
                    >
                    </NewsItem>
                </a>
            )}
        </section>
    );
}

export default NewsSection;