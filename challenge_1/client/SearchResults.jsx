import React from 'react';
import HistoricalRecord from './HistoricalRecord.jsx';

function SearchResults({ data }) {
  if (data.length === 0) {
    return null;
  }
  return (

    <div>
      Search Results:
      {data.map(record => <HistoricalRecord record= {record} />)}
    </div>
  )
};

export default SearchResults;