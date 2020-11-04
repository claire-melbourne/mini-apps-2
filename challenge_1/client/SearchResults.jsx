import React from 'react';
import HistoricalRecord from './HistoricalRecord.jsx';

function SearchResults({ data }) {
  if (data.length === 0) {
    return null;
  }
  return (
    {data.map(record => <HistoricalRecord record= {record} />)}
  )
};

export default SearchResults;