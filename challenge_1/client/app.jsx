import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import Search from './Search.jsx';
import SearchResults from './SearchResults.jsx';

function App() {

  const [data, setData] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  const searchRecordsByKeyword = (keyword) => {
    console.log(`Received ${keyword} for search`)
    axios.get(`http://localhost:3000/events?q=${keyword}&_limit=10&_page=1`)
    .then(res => {
      console.log('RESPONSE: ', res);
      var splitLinks = ('' + res.headers.link).split('page=');
      var lastPage = splitLinks[splitLinks.length - 1].split('>')[0];
      setPageCount(lastPage);
      //var lastPage = splitLinks[splitLinks.length]
      console.log('RESPONSE LINKS Last page: ', lastPage)
      setData(res.data);
    })
    .catch(err => console.error('ERROR: ', err))
  }
  return (
    <div>
      <div>Find Historical Records</div>
      <Search searchRecordsByKeyword = { term => searchRecordsByKeyword(term) }/>
      <SearchResults data= {data} pageCount= {pageCount}/>
    </div>
  );
};

ReactDOM.render(<App/>, document.getElementById('app'));