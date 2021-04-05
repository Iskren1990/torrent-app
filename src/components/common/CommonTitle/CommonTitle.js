import style from './CommonTitle.module.css';

const CommonTitle = ({title, styles, onClick}) => {
    return (
        <h1 className={styles || style.Title} onClick={onClick && onClick }>{title}</h1>
    );
}

export default CommonTitle;