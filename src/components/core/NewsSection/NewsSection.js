import style from './NewsSection.module.css';
import NewsItem from '../../common/NewsItem';
import { useEffect, useState } from 'react';
import news from '../../../mock/news.json';

const NewsSection = () => {
    // const [news, setNews] = useState([]);
    // useEffect(() => {
    //     fetch('./src/mock/news.json').then(x => x.json()).then(x => console.log(x))
    // });

    return (
        <section className={style.NewsSection}>
            {news.articles.slice(0, 6).map(article =>
                <a className={style.Links} href={article.url}>
                    <NewsItem
                        {...article}
                    >
                    </NewsItem></a>
            )}
        </section>
    );
}

export default NewsSection;