import style from './ErrorMessage.module.css';

const ErrorMessage = ({error}) => {
    return (
        <span className={style.ErrorMessage}>{error}</span>
    );
}

export default ErrorMessage;