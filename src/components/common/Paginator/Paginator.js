import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import style from './Paginator.module.css';
import TorrentService from '../../../services/torrents';

const Paginator = ({ onPageChange, filter }) => {
    const [count, setCount] = useState(5);
    useEffect(() => {
        TorrentService.getCount(filter).then(res => setCount(res / 20));
    }, [filter]);

    return (
        <ReactPaginate
            previousLabel={'<<'}
            nextLabel={'>>'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={count}
            marginPagesDisplayed={2}
            pageRangeDisplayed={count}
            onPageChange={onPageChange}
            containerClassName={style.Paginate}
            activeClassName={style.Active}
        />
    );
}

export default Paginator;