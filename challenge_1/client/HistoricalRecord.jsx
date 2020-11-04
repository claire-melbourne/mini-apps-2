import React from 'react';

function HistoricalRecord(record) {
  return (
    <div>
      Date: { record.record.date }<br/>
      Language: { record.record.lang }<br/>
      Categories: { `${record.record.category1}, ${record.record.category2}` }<br/>
      Description: { record.record.description }<br/>
    </div>
  );
};

export default HistoricalRecord;