import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './Search.jsx';
import SearchResults from './SearchResults.jsx';

function App() {

  const [data, setData] = useState([]);

  const searchRecordsByKeyword = (keyword) => {
    console.log(`Received ${keyword} for search`)
    axios.get(`http://localhost:3000/events?q=${keyword}`)
    .then(res => {
      console.log('RESPONSE: ', res);
      setData(res.data);
    })
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