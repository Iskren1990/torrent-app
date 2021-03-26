import style from './SubmitBtn.module.css';

const SubmitBtn = ({ value }) => {
    return (
        <input className={style.Submit} type="submit" value={value} />
    );
}

export default SubmitBtn;