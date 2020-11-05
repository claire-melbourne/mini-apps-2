import React, {useState} from 'react';
import ReactPaginate from 'react-paginate';
import HistoricalRecord from './HistoricalRecord.jsx';

function SearchResults({ data, pageCount, getSelectedPage }) {

  const [currentPage, setCurrentPage] = useState(1);

  const handlePageClick = (selected) => {
    setCurrentPage(selected.selected);
    getSelectedPage(selected.selected);
  }

  if (data.length === 0) {
    return null;
  }

  return (
    <div>
        {console.log('pages 0 indexed (one less than displayed)', currentPage)}
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
      <div>
        Search Results:
        <ul>
        {data.map(record => <HistoricalRecord record= {record} />)}
        </ul>
      </div>
    </div>
  )
};

export default SearchResults;