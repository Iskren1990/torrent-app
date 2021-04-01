import style from './LoadingBar.module.css';

const LoadingBar = () => {

    return (
        <div className={style.BarWrapper}>
            <div className={style.loader}>
                <div className={style.bar}></div>
                <div className={style.bar}></div>
                <div className={style.bar}></div>
            </div>
        </div>
    );
}

export default LoadingBar;


