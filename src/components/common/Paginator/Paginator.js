import style from './Paginator.module.css';
import ReactPaginate from 'react-paginate';

const Paginator = ({onPageChange, styles }) => {
    // create count puler
    return (
        <ReactPaginate
        previousLabel={'previous'}
        nextLabel={'next'}
        breakLabel={'...'}
        breakClassName={'break-me'}
        pageCount={20}
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        onPageChange={onPageChange}
        containerClassName={style.Paginate}
        activeClassName={style.Active}
    />
    );
}

export default Paginator;