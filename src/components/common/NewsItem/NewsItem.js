import style from './NewsItem.module.css';

const NewsItem = ({ title, source, url, urlToImage, description }) => {

    return (
        <article className={style.NewsItem}>
            <img src={urlToImage} alt={title} />
            <div className={style.contentWrapper}>
                <h3>{title}</h3>
                <p>{description}</p>
                <p className={style.source}>{source.name}</p>
            </div>
        </article>
    )
}

export default NewsItem;