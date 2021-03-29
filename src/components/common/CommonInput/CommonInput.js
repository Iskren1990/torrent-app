import style from './CommonInput.module.css';

const CommonInput = ({ type, value, id, label, onChange, readonly }) => {
    return (
        <div className={ style.CommonInput }>
            <label htmlFor={id}>{label}</label>
            <input
                className={readonly ? "" : style.Editable}
                type={type || 'text'}
                value={value}
                name={id} id={id}
                onChange={onChange}
                readOnly={readonly || false}
            />
        </div>
    );
}

export default CommonInput;