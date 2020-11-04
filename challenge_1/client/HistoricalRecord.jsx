import React from 'react';

function HistoricalRecord(record) {
  return (
    <div>
      Date: { record.date }
      Language: { record.lang }
      Categories: { `${record.category1}, ${record.category2}` }
      Description: { record.description }
    </div>
  );
};

export default HistoricalRecord;