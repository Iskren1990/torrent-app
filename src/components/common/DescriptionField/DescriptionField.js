import style from './DescriptionField.module.css';

const DescriptionField = ({ lebel, text }) => {
    return (
        <div className={style.Wrapper}>
            <label className={style.Label} htmlFor="description">{lebel}</label>
            <textarea className={style.DescriptionField} name="description" rows="5" defaultValue={text}></textarea>
        </div>
    );
}

export default DescriptionField;

