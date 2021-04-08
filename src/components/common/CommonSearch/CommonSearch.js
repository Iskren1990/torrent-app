import { useState } from 'react';

import style from './CommonSearch.module.css';
import CommonInput from '../CommonInput';
import SubmitBtn from '../SubmitBtn';

const CommonSearch = ({ styles, setData }) => {
    const [searchCriteria, setSearchCriteria] = useState("");

    const searchClickHandler = () =>  setData(searchCriteria);

    return (
        <article className={styles || style.Wrapper} >
            <CommonInput
                onChange={(e) => setSearchCriteria(e.target.value)}
                placeholder="Search by name"
            />
            <SubmitBtn
                value="SEARCH"
                onClick={e => searchClickHandler()}
            />
        </article>
    );
}

export default CommonSearch;