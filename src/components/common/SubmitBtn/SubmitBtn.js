import style from './SubmitBtn.module.css';

const SubmitBtn = ({ value, type, onClick }) => {
    return (
        <input
            className={style.Submit}
            type={type || "submit"}
            value={value}
            onClick={onClick}
        />
    );
}

export default SubmitBtn;