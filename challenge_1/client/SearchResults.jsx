import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import HistoricalRecord from './HistoricalRecord.jsx';

function SearchResults({ data, pageCount }) {
  const [currentPage, setCurrentPage] = useState(0);

  const handlePageClick = (selectedPage) => {
    setCurrentPage(selectedPage);
  }
  if (data.length === 0) {
    return null;
  }

  return (
    <div>
      <ReactPaginate
        previousLabel= {'<-- Prev'}
        nextLabel= {'Next -->'}
        breakLabel={'...'}
        pageCount= { pageCount }
        onPageChange= { handlePageClick }
        marginPagesDisplayed={2}
        pageRangeDisplayed={5}
        //don't know what the following do, but including for now for reference
        containerClassName={'pagination'}
        subContainerClassName={'pages pagination'}
        activeClassName={'active'}
      />
      Search Results:
      {data.map(record => <HistoricalRecord record= {record} />)}
    </div>
  )
};

export default SearchResults;