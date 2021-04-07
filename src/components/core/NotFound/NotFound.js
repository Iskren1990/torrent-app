import style from './NotFound.module.css';

const NotFound = () => {
    return (
        <section className={style.NotFound}>
            <h1>4<span><i className="fas fa-ghost"></i></span>4</h1>
            <h2>Error: 404 page not found</h2>
            <p>Sorry, the page you're looking for cannot be accessed</p>
        </section>
    );
}

export default NotFound;