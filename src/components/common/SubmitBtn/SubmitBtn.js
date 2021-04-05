import style from './SubmitBtn.module.css';

const SubmitBtn = ({ value, type, onClick, disabled, styles }) => {
    return (
        <input
            className={styles || style.Submit}
            type={type || "submit"}
            value={value}
            onClick={onClick}
            disabled={disabled}
        />
    );
}

export default SubmitBtn;