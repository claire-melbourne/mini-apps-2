import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

function App() {
  //write a get request which searches db by keyword(s?)

  const search = (keyword) => {
    axios.get(`http://localhost:3000/events?q=${keyword}`)
    .then(res => console.log('RESPONSE: ', res))
    .catch(err => console.error('ERROR: ', err))
  }
  return (
    <div>Historical Records</div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));