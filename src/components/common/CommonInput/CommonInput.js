import style from './CommonInput.module.css';

const CommonInput = ({type, value, id, label, onChange}) => {
    return (
        <div className={style.CommonInput}>
            <label htmlFor={id}>{label}</label>
            <input type={type || 'text'} value={value} name={id} id={id} onChange={onChange} />
        </div>
    );
}

export default CommonInput;