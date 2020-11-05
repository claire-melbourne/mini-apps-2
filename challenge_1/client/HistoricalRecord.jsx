import React from 'react';

function HistoricalRecord(record) {
  return (
    <li>
      Date: { record.record.date }<br/>
      Language: { record.record.lang }<br/>
      Categories: { `${record.record.category1}, ${record.record.category2}` }<br/>
      Description: { record.record.description }<br/>
    </li>
  );
};

export default HistoricalRecord;