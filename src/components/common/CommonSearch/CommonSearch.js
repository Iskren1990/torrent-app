import { useState } from 'react';

import style from './CommonSearch.module.css';
import CommonInput from '../CommonInput';
import SubmitBtn from '../SubmitBtn';

const CommonSearch = ({ styles, setData }) => {
    const [searchCriteria, setSearchCriteria] = useState("");
    const [filter, setFilter] = useState("search");

    const searchClickHandler = () => setData(`&${filter}=${searchCriteria}`);

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
                <CommonInput
                    name="title"
                    id="option"
                    label="Title"
                    type="radio"
                    checked={filter === "search"}
                    onChange={(e) => setFilter(() => "search")}
                />
            <CommonInput
                name="rating"
                id="option"
                label="IMDB Rating"
                type="radio"
                checked={filter === "imdbRating"}
                onChange={(e) => setFilter(() => `imdbRating`)}
            />
        </article>
    );
}

export default CommonSearch;