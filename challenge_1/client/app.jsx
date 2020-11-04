import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './Search.jsx'

function App() {
  //write a get request which searches db by keyword(s?)

  const searchRecordsByKeyword = (keyword) => {
    console.log(`Received ${keyword} for search`)
    axios.get(`http://localhost:3000/events?q=${keyword}`)
    .then(res => console.log('RESPONSE: ', res))
    .catch(err => console.error('ERROR: ', err))
  }
  return (
    <div>
      <div>Find Historical Records</div>
      <Search searchRecordsByKeyword = { term => searchRecordsByKeyword(term) }/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));