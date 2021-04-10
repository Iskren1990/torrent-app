import style from './CommonInput.module.css';

const CommonInput = ({ type, value, id, label, onChange, readonly, placeholder, checked }) => {
    return (
        <div className={style.CommonInput}>
            <label htmlFor={id}>{label}</label>
            <input
                className={readonly ? "" : style.Editable}
                type={type || 'text'}
                value={value}
                name={id}
                id={id}
                onChange={onChange}
                readOnly={readonly || false}
                placeholder={placeholder || ""}
                checked={checked || false}
            />
        </div>
    );
}

export default CommonInput;